package net.corda.explorer.model.response;

import net.corda.core.identity.Party;

import java.util.List;
import java.util.Map;

public class VaultFilter {

    private Map<String, String> stateTypes;
    private List<Party> notaries;
    private Map<String, String> status;
    private Map<String, String> relevancy;
    private List<Party> parties;

    public Map<String, String> getStateTypes() {
        return stateTypes;
    }

    public void setStateTypes(Map<String, String> stateTypes) {
        this.stateTypes = stateTypes;
    }

    public List<Party> getNotaries() {
        return notaries;
    }

    public void setNotaries(List<Party> notaries) {
        this.notaries = notaries;
    }

    public Map<String, String> getStatus() {
        return status;
    }

    public void setStatus(Map<String, String> status) {
        this.status = status;
    }

    public Map<String, String> getRelevancy() {
        return relevancy;
    }

    public void setRelevancy(Map<String, String> relevancy) {
        this.relevancy = relevancy;
    }

    public List<Party> getParties() {
        return parties;
    }

    public void setParties(List<Party> parties) {
        this.parties = parties;
    }
}
