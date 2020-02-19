package net.corda.explorer.service.impl;

import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.common.Settings;
import net.corda.explorer.model.request.LoginRequest;
import net.corda.explorer.model.response.Profile;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.LoginService;
import net.corda.explorer.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private NodeRPCClient rpcClient;

    @Autowired
    private SettingsService settingsService;

    @Override
    public Profile loginToNode(LoginRequest loginRequest) throws ConnectionException, IOException {
        Profile profile = rpcClient.doLogin(loginRequest);
        settingsService.loadApplicationSettings();
        return profile;
    }
}