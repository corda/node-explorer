package net.corda.explorer.model.request;

import java.util.List;

public class VaultFilterSelection {

    private int pageSize;
    private int offset;
    private List<String> stateTypes;
    private List<String> statuses;
    private List<String> relevancies;
    private List<String> notaries;
    private List<String> parties;

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public List<String> getStateTypes() {
        return stateTypes;
    }

    public void setStateTypes(List<String> stateTypes) {
        this.stateTypes = stateTypes;
    }

    public List<String> getStatuses() {
        return statuses;
    }

    public void setStatuses(List<String> statuses) {
        this.statuses = statuses;
    }

    public List<String> getRelevancies() {
        return relevancies;
    }

    public void setRelevancies(List<String> relevancies) {
        this.relevancies = relevancies;
    }

    public List<String> getNotaries() {
        return notaries;
    }

    public void setNotaries(List<String> notaries) {
        this.notaries = notaries;
    }

    public List<String> getParties() {
        return parties;
    }

    public void setParties(List<String> parties) {
        this.parties = parties;
    }
}
