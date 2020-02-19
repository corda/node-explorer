package net.corda.explorer.service;

import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.request.LoginRequest;
import net.corda.explorer.model.response.Profile;

import java.io.IOException;

public interface LoginService {
    Profile loginToNode(LoginRequest loginRequest) throws ConnectionException, IOException;
}
