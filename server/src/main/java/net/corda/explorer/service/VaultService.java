package net.corda.explorer.service;

import net.corda.core.contracts.ContractState;
import net.corda.core.node.services.Vault;
import net.corda.explorer.model.response.VaultFilter;
import net.corda.explorer.model.request.VaultFilterSelection;

public interface VaultService {

    Vault.Page<ContractState> getVaultStates(VaultFilterSelection filter) throws ClassNotFoundException;

    VaultFilter getVaultFilters();
}
