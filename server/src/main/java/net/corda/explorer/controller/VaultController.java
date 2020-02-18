package net.corda.explorer.controller;

import net.corda.core.contracts.ContractState;
import net.corda.core.node.services.Vault;
import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.response.VaultFilter;
import net.corda.explorer.model.request.VaultFilterSelection;
import net.corda.explorer.model.response.MessageResponseEntity;
import net.corda.explorer.service.VaultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class VaultController {

    @Autowired
    private VaultService vaultService;

    @PostMapping("/vault-query")
    public MessageResponseEntity<Vault.Page<ContractState>> getVaultStates(@RequestBody VaultFilterSelection filter){
        try{
            return new MessageResponseEntity<>(vaultService.getVaultStates(filter));
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }

    @GetMapping("/vault-filter")
    public MessageResponseEntity<VaultFilter> getVaultFilter(){
        try{
            return new MessageResponseEntity<>(vaultService.getVaultFilters());
        }catch (Exception e){
            e.printStackTrace();
            throw new GenericException(e.getMessage());
        }
    }
}
