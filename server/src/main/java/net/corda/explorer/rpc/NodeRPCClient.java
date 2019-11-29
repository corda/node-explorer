package net.corda.explorer.rpc;


import net.corda.client.rpc.CordaRPCClient;
import net.corda.client.rpc.RPCException;
import net.corda.core.crypto.CryptoUtils;
import net.corda.core.identity.Party;
import net.corda.core.messaging.CordaRPCOps;
import net.corda.core.node.NodeInfo;
import net.corda.core.utilities.NetworkHostAndPort;
import net.corda.explorer.db.CityDB;
import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.LoginRequest;
import net.corda.explorer.model.NetworkMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Component
public class NodeRPCClient {
    private static final Logger logger = LoggerFactory.getLogger(NodeRPCClient.class);

    private CordaRPCOps rpcProxy;

    @Autowired
    private CityDB cityDB;

    public void loginToNode(LoginRequest loginRequest) throws Exception {
        try {
            rpcProxy = new CordaRPCClient(NetworkHostAndPort.parse(loginRequest.getHostName() + ":" +
                    loginRequest.getPort())).start(loginRequest.getUsername(), loginRequest.getPassword()).getProxy();
        } catch (RPCException re) {
            throw new ConnectionException(re.getMessage());
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public NetworkMap getNetworkMap(){
        List<NodeInfo> nodeInfoList = rpcProxy.networkMapSnapshot();
        List<Party> notaries = rpcProxy.notaryIdentities();
        NetworkMap networkMap = new NetworkMap();

        NodeInfo selfNodeInfo = rpcProxy.nodeInfo();
        networkMap.setSelf(getNodeDataFromNodeInfo(selfNodeInfo));

        List<NetworkMap.NodeData> notaryList = new ArrayList<>();
        List<NetworkMap.NodeData> peerList = new ArrayList<>();
        for(NodeInfo nodeInfo: nodeInfoList){
            if(!(nodeInfo.equals(selfNodeInfo))) {
                if (notaries.contains(nodeInfo.getLegalIdentities().get(0))) {
                    notaryList.add(getNodeDataFromNodeInfo(nodeInfo));
                } else {
                    peerList.add(getNodeDataFromNodeInfo(nodeInfo));
                }
            }
        }
        networkMap.setNotaries(notaryList);
        networkMap.setPeers(peerList);

        return networkMap;
    }

    private NetworkMap.NodeData getNodeDataFromNodeInfo(NodeInfo nodeInfo){
        NetworkMap.NodeData nodeData = new NetworkMap.NodeData();
        Party party = nodeInfo.getLegalIdentities().get(0);
        CityDB.CityDetail cityDetail = cityDB.getCityDetails(
                party.getName().getLocality() + "_" + party.getName().getCountry());
        nodeData.setName(party.getName().getOrganisation());
        nodeData.setCity(party.getName().getLocality());
        nodeData.setCountry(cityDetail.getCountry());
        nodeData.setLat(cityDetail.getLat());
        nodeData.setLng(cityDetail.getLng());
        nodeData.setPublicKey(CryptoUtils.toStringShort(party.getOwningKey()).substring(0, 25));
        nodeData.setAddress(nodeInfo.getAddresses().get(0).toString());

        return nodeData;
    }

    public CordaRPCOps getRpcProxy() {
        return rpcProxy;
    }
}