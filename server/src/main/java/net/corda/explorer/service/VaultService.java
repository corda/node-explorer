package net.corda.explorer.service;

import net.corda.core.contracts.ContractState;
import net.corda.core.node.services.Vault;

public interface VaultService {

    Vault.Page<ContractState> getUnconsumedStates();
}
