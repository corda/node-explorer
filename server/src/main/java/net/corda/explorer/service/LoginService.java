package net.corda.explorer.service;

import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.request.LoginRequest;

public interface LoginService {

    void loginToNode(LoginRequest loginRequest) throws ConnectionException;

}
