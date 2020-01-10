package net.corda.explorer.service.impl;

import net.corda.core.crypto.CryptoUtils;
import net.corda.core.transactions.CoreTransaction;
import net.corda.core.transactions.SignedTransaction;
import net.corda.core.transactions.WireTransaction;
import net.corda.explorer.model.response.FlowData;
import net.corda.explorer.model.response.TransactionList;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.ExplorerService;
import net.corda.explorer.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private ExplorerService explorerService;

    @Override
    public FlowData getFlowList() {
        FlowData flowData = new FlowData();
        List<File> jarFiles = loadCorDappsToClassPath();
        flowData.setFlowInfoList(loadFlowsInfoFromJarFiles(jarFiles, NodeRPCClient.getRpcProxy().registeredFlows()));
        return flowData;
    }

    @Override
    @SuppressWarnings( "deprecation" )
    public TransactionList getTransactionList(int pageSize, int offset) {
        List<SignedTransaction> signedTransactions = NodeRPCClient.getRpcProxy().internalVerifiedTransactionsSnapshot();
        TransactionList transactionList = new TransactionList();
        List<TransactionList.TransactionData> transactionDataList = new ArrayList<>();
        transactionList.setTotalRecords(signedTransactions.size());
        int initial = offset * pageSize;
        for(int i=initial; i< initial + pageSize; i++){
            CoreTransaction coreTransaction = signedTransactions.get(i).getCoreTransaction();
            TransactionList.TransactionData transactionData = new TransactionList.TransactionData();
            transactionData.setOutputs(coreTransaction.getOutputStates());
            Map<String, Integer> typeMap = new HashMap<>();
            coreTransaction.getOutputStates().forEach(contractState -> {
                String type = contractState.getClass().getCanonicalName().substring(
                        contractState.getClass().getCanonicalName().lastIndexOf(".") + 1);
                if (typeMap.containsKey(type)) {
                    typeMap.put(type, typeMap.get(type) + 1);
                } else {
                    typeMap.put(type, 1);
                }
            });
            List<TransactionList.TypeCount> outputTypeCountList = new ArrayList<>();
            typeMap.keySet().forEach(s -> {
                TransactionList.TypeCount typeCount = new TransactionList.TypeCount();
                typeCount.setType(s);
                typeCount.setCount(typeMap.get(s));
                outputTypeCountList.add(typeCount);
            });
            transactionData.setOutputTypes(outputTypeCountList);

            transactionData.setTransactionId(coreTransaction.getId().toString());
            transactionData.setCommands(((WireTransaction)coreTransaction).getCommands().stream().map(command ->
                    command.getValue().getClass().getCanonicalName().substring(command.getValue().getClass()
                            .getCanonicalName().lastIndexOf(".")+1)).collect(Collectors.toList()));

            List<TransactionList.Signer> signerList = new ArrayList<>();
            ((WireTransaction) coreTransaction).getCommands().forEach(command -> {
                command.getSigners().forEach(publicKey -> {
                    String key = CryptoUtils.toStringShort(publicKey);
                    TransactionList.Signer signer = new TransactionList.Signer();
                    signer.setPartyName(explorerService.getPartyKeyMap().get(key));
                    signer.setSigningKey(key);
                    signerList.add(signer);
                });
            });
            transactionData.setSigners(signerList);
            transactionData.setNotary(coreTransaction.getNotary().getName().getOrganisation());
            transactionDataList.add(transactionData);
        }
        transactionList.setTransactionData(transactionDataList);
        return transactionList;
    }

    private List<File> loadCorDappsToClassPath() {
        //TODO Fetch from Config
        String CORDAPP_PATH = "/Users/ashutoshmeher/Corda/corda-samples/schedulable-state/build/nodes/Auctioner/cordapps";

        List<File> jarFiles = filterJarFiles(CORDAPP_PATH);
        addJarFilesToClassPath(jarFiles);
        return jarFiles;
    }

    private List<File> filterJarFiles(String path){
        File dir = new File(path);
        List<File> jarFiles = new ArrayList<>();
        File[] filesList = dir.listFiles();
        if(filesList != null && filesList.length > 0) {
            Arrays.stream(filesList).filter(file ->
                    file.getName().contains(".jar"))
                    .forEach(jarFiles::add);
        }
        return jarFiles;
    }

    private void addJarFilesToClassPath(List<File> jarFiles) {
        URLClassLoader sysClassLoader = (URLClassLoader) getClass().getClassLoader();
        try {
            Method method = URLClassLoader.class.getDeclaredMethod("addURL", URL.class);
            jarFiles.forEach(file -> {
                try {
                    URL url = file.toURI().toURL();
                    method.setAccessible(true);
                    method.invoke(sysClassLoader, url);
                } catch (IllegalAccessException | InvocationTargetException | MalformedURLException e) {
                    e.printStackTrace();
                }
            });
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
    }

    private List<FlowData.FlowInfo> loadFlowsInfoFromJarFiles(List<File> jarFiles, List<String> registeredFlows){
        List<FlowData.FlowInfo> flowInfoList = new ArrayList<>();

        for(String flow: registeredFlows){
            if(!flow.contains("net.corda.core.flows")){
                for(File jarFile: jarFiles){
                    try{
                        URL url = jarFile.toURI().toURL();
                        URLClassLoader classLoader = new URLClassLoader(new URL[]{url}, getClass().getClassLoader());
                        FlowData.FlowInfo flowInfo = new FlowData.FlowInfo();
                        flowInfo.setFlowName(flow);
                        try {
                            Class flowClass = Class.forName(flow, true, classLoader);
                            flowInfo.setFlowParams(loadFlowParams(flowClass));
                            flowInfoList.add(flowInfo);
                            break;
                        } catch (ClassNotFoundException e) {
                            e.printStackTrace();
                        }
                    }catch (MalformedURLException e){
                        e.printStackTrace();
                    }
                }
            }
        }
        return flowInfoList;
    }

    // TODO: Handle multiple constructors
    private List<FlowData.FlowParam> loadFlowParams(Class flowClass) {
        List<FlowData.FlowParam> flowParamList = new ArrayList<>();
        StringBuilder constructorID;

        // construct params List for each constructor
        for (Constructor constructor : flowClass.getConstructors()) {
            boolean defaultConstructorMarker = false; // sentinel for skipping kotlin default constructor
            constructorID = new StringBuilder();

            for(Parameter param: constructor.getParameters()){
                if(param.isNamePresent()){
                    //TODO: Fetch Generic Type of List/Set
                    FlowData.FlowParam flowParam = new FlowData.FlowParam();
                    flowParam.setParamName(param.getName());
                    flowParam.setParamType(param.getType());
                    flowParamList.add(flowParam);
//                    if ((constructorID.length() == 0)) {
//                        constructorID.append(param.getName() + ":" + param.getType().getSimpleName());
//                    } else {
//                        constructorID.append(", ").append(param.getName() + ":" + param.getType().getSimpleName());
//                    }
                }else{
                    defaultConstructorMarker = true;
                }
            }

            // skip if contains type: DefaultConstructorMarker
            if (defaultConstructorMarker) continue;

            // create constructor stringKey and place in Map
            // constructorToParams.putIfAbsent(constructorID.toString(), params);
        }

        return flowParamList;
    }
}

