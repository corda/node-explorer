package net.corda.explorer.service.impl;

import net.corda.core.contracts.ContractState;
import net.corda.core.node.services.Vault;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.VaultService;
import org.springframework.stereotype.Service;

@Service
public class VaultServiceImpl implements VaultService {

    @Override
    public Vault.Page<ContractState> getUnconsumedStates() {
        return NodeRPCClient.getRpcProxy().vaultQuery(ContractState.class);
    }
}
