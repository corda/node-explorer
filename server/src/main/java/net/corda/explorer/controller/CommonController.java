package net.corda.explorer.controller;

import net.corda.explorer.model.*;
import net.corda.explorer.model.request.LoginRequest;
import net.corda.explorer.model.request.PageRequest;
import net.corda.explorer.model.response.FlowData;
import net.corda.explorer.model.response.NetworkMap;
import net.corda.explorer.model.response.TransactionList;
import net.corda.explorer.rpc.NodeRPCClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class CommonController {

    @Autowired
    private NodeRPCClient rpcClient;

    @MessageMapping("/login")
    @SendTo("/client/general")
    public Message login(LoginRequest loginRequest){
        try {
            rpcClient.loginToNode(loginRequest);
            return new Message(Command.CONNECT, Status.SUCCESS);
        }catch (Exception e){
            return new Message(Command.CONNECT, e.getMessage(), Status.ERROR);
        }
    }


    @MessageMapping("/networkMap")
    @SendTo("/client/general")
    public Message networkMap(){
        try {
            NetworkMap networkMap = rpcClient.getNetworkMap();
            return new Message(Command.NETWORK_MAP, networkMap, Status.SUCCESS);
        }catch (Exception e){
            return new Message(Command.NETWORK_MAP, e.getMessage(), Status.ERROR);
        }
    }

    @MessageMapping("/flowList")
    @SendTo("/client/general")
    public Message flowList(){
        try {
            FlowData flowData = rpcClient.getFlowData();
            return new Message(Command.FLOW_LIST, flowData, Status.SUCCESS);
        }catch (Exception e){
            return new Message(Command.FLOW_LIST, e.getMessage(), Status.ERROR);
        }
    }

    @MessageMapping("/tranxList")
    @SendTo("/client/general")
    public Message transactionList(PageRequest pageRequest){
        try {
            TransactionList transactionList = rpcClient.getTransactions(pageRequest.getPageSize(), pageRequest.getOffset());
            return new Message(Command.TRNX_LIST, transactionList, Status.SUCCESS);
        }catch (Exception e){
            return new Message(Command.TRNX_LIST, e.getMessage(), Status.ERROR);
        }
    }
}