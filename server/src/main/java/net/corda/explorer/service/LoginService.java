//package net.corda.explorer.service;
//
//import net.corda.client.rpc.CordaRPCClient;
//import net.corda.client.rpc.RPCException;
//import net.corda.core.utilities.NetworkHostAndPort;
//import net.corda.explorer.exception.ConnectionException;
//import net.corda.explorer.model.Command;
//import net.corda.explorer.model.Message;
//import net.corda.explorer.model.Status;
//import net.corda.explorer.model.request.LoginRequest;
//import net.corda.explorer.rpc.NodeRPCClient;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class LoginService {
//
//    @Autowired
//    private NodeRPCClient rpcClient;
//
//
//    public Message doLogin(LoginRequest loginRequest) {
//        try {
//            rpcClient.loginToNode(loginRequest);
//            return new Message(Command.CONNECT, Status.SUCCESS);
//        }catch (Exception e){
//            return new Message(Command.CONNECT, e.getMessage(), Status.ERROR);
//        }
//    }
//
//}
