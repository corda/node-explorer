package net.corda.explorer.service.impl;

import com.google.common.collect.ImmutableSet;
import net.corda.core.contracts.ContractState;
import net.corda.core.identity.CordaX500Name;
import net.corda.core.identity.Party;
import net.corda.core.node.NodeInfo;
import net.corda.core.node.services.Vault;
import net.corda.core.node.services.vault.PageSpecification;
import net.corda.core.node.services.vault.QueryCriteria;
import net.corda.explorer.model.response.VaultFilter;
import net.corda.explorer.model.request.VaultFilterSelection;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.VaultService;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class VaultServiceImpl implements VaultService {

    private Map<String, Class> contractStateClassMap = new HashMap<>();

    @Override
    public Vault.Page getVaultStates(VaultFilterSelection filter) throws ClassNotFoundException{
        PageSpecification pageSpecification =
                new PageSpecification(filter.getOffset() + 1, filter.getPageSize());

        /* ContractStateType Filters */
        Set<Class<ContractState>> stateType = ImmutableSet.of(ContractState.class);
        HashSet<Class<ContractState>> stateTypeSet = new HashSet<>();
        if(filter.getStateTypes() != null &&  filter.getStateTypes().size() > 0){
            for(String classString: filter.getStateTypes())
                stateTypeSet.add(contractStateClassMap.get(classString));
            stateType = stateTypeSet;
        }

        /* StateStatus Filters */
        Vault.StateStatus status = Vault.StateStatus.ALL;
        if(filter.getStatuses() != null && filter.getStatuses().size()>0){
            if(filter.getStatuses().size() == 1){
                if(filter.getStatuses().get(0).equals("CONSUMED")){
                    status = Vault.StateStatus.CONSUMED;
                }else{
                    status = Vault.StateStatus.UNCONSUMED;
                }
            }
        }

        /* RelevancyStatus Filters */
        Vault.RelevancyStatus relevancyStatus = Vault.RelevancyStatus.ALL;
        if(filter.getRelevancies() != null && filter.getRelevancies().size()>0){
            if(filter.getRelevancies().size() == 1){
                if(filter.getRelevancies().get(0).equals("RELEVANT")){
                    relevancyStatus = Vault.RelevancyStatus.RELEVANT;
                }else{
                    relevancyStatus = Vault.RelevancyStatus.NOT_RELEVANT;
                }
            }
        }

        /* Parties Filters */
        List<Party> parties = null;
        if(filter.getParties()!=null) {
            parties = filter.getParties().stream().map(s ->
                    NodeRPCClient.getRpcProxy().wellKnownPartyFromX500Name(CordaX500Name.parse(s)))
                    .collect(Collectors.toList());
        }

        QueryCriteria.VaultQueryCriteria queryCriteria = null;
        if(parties!=null && parties.size()>0) {
            queryCriteria = new QueryCriteria.VaultQueryCriteria()
                    .withRelevancyStatus(relevancyStatus)
                    .withContractStateTypes(stateType)
                    .withStatus(status);
            queryCriteria = addParticipants(queryCriteria, parties);
        }else{
             queryCriteria = new QueryCriteria.VaultQueryCriteria()
                     .withRelevancyStatus(relevancyStatus)
                     .withContractStateTypes(stateType)
                     .withStatus(status);
        }

        return NodeRPCClient.getRpcProxy()
                .vaultQueryByWithPagingSpec(ContractState.class, queryCriteria, pageSpecification);
    }

    private QueryCriteria.VaultQueryCriteria addParticipants(QueryCriteria.VaultQueryCriteria criteria, List<Party> parties){
        return new QueryCriteria.VaultQueryCriteria(
                criteria.getStatus(),
                criteria.getContractStateTypes(),
                criteria.getStateRefs(),
                criteria.getNotary(),
                criteria.getSoftLockingCondition(),
                criteria.getTimeCondition(),
                criteria.getRelevancyStatus(),
                criteria.getConstraintTypes(),
                criteria.getConstraints(),
                parties,
                criteria.getExternalIds()
        );
    }

    @Override
    public VaultFilter  getVaultFilters() {
        VaultFilter filter = new VaultFilter();
        QueryCriteria.VaultQueryCriteria queryCriteria = new QueryCriteria.VaultQueryCriteria().withStatus(Vault.StateStatus.ALL);
        Vault.Page<ContractState> result = NodeRPCClient.getRpcProxy().vaultQueryByCriteria(queryCriteria, ContractState.class);
        Map<String, String> stateTypeMap = new TreeMap<>();
        result.getStates().forEach(stateAndRef -> {
            stateTypeMap.put(stateAndRef.getState().getData().getClass().toString().substring(
                    stateAndRef.getState().getData().getClass().toString().lastIndexOf(".") + 1),
                    stateAndRef.getState().getData().getClass().toString());
            contractStateClassMap.put(stateAndRef.getState().getData().getClass().toString(),
                    stateAndRef.getState().getData().getClass());
        });
        filter.setStateTypes(stateTypeMap);

        filter.setNotaries(NodeRPCClient.getRpcProxy().notaryIdentities());

        Map<String, String> status = new HashMap<>();
        status.put("Consumed", Vault.StateStatus.CONSUMED.toString());
        status.put("Unconsumed", Vault.StateStatus.UNCONSUMED.toString());
        filter.setStatus(status);

        Map<String, String> relevancy = new HashMap<>();
        relevancy.put("Relevent", Vault.RelevancyStatus.RELEVANT.toString());
        relevancy.put("Not Relevant", Vault.RelevancyStatus.NOT_RELEVANT.toString());
        filter.setRelevancy(relevancy);

        List<Party> parties = new ArrayList<>();
        List<NodeInfo> nodeInfoList = NodeRPCClient.getRpcProxy().networkMapSnapshot();
        List<Party> notaries = NodeRPCClient.getRpcProxy().notaryIdentities();
        for(NodeInfo nodeInfo: nodeInfoList){
            if (!notaries.contains(nodeInfo.getLegalIdentities().get(0))) {
                parties.add(nodeInfo.getLegalIdentities().get(0));
            }
        }
        filter.setParties(parties);
        return filter;
    }
}