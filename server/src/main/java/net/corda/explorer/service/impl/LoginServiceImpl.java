package net.corda.explorer.service.impl;

import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.request.LoginRequest;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private NodeRPCClient rpcClient;

    @Override
    public void loginToNode(LoginRequest loginRequest) throws ConnectionException {
        rpcClient.doLogin(loginRequest);
    }
}