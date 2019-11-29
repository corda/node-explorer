package net.corda.explorer.controller;

import net.corda.core.node.NodeInfo;
import net.corda.explorer.model.*;
import net.corda.explorer.rpc.NodeRPCClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class MessageController {

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
            return new Message(Command.NETWORKMAP, networkMap, Status.SUCCESS);
        }catch (Exception e){
            return new Message(Command.NETWORKMAP, e.getMessage(), Status.ERROR);
        }
    }


}