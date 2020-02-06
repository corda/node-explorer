package net.corda.explorer.controller;

import net.corda.core.contracts.ContractState;
import net.corda.core.node.services.Vault;
import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.response.FlowData;
import net.corda.explorer.model.response.MessageResponseEntity;
import net.corda.explorer.service.VaultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class VaultController {

    @Autowired
    private VaultService vaultService;

    @GetMapping("/vault-query")
    public MessageResponseEntity<Vault.Page<ContractState>> getUnconsumedStates(){
        try{
            return new MessageResponseEntity<>(vaultService.getUnconsumedStates());
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }
}
