package net.corda.explorer.controller;

import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.request.LoginRequest;
import net.corda.explorer.model.response.MessageResponseEntity;
import net.corda.explorer.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public MessageResponseEntity<String> login(@RequestBody LoginRequest loginRequest){
        try {
            loginService.loginToNode(loginRequest);
            return new MessageResponseEntity<>();
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }
}