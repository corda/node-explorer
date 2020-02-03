package net.corda.explorer.model.common;

import java.util.List;

public class FlowInfo {
    private String flowName;
    private List<FlowParam> flowParams;

    public String getFlowName() {
        return flowName;
    }

    public void setFlowName(String flowName) {
        this.flowName = flowName;
    }

    public List<FlowParam> getFlowParams() {
        return flowParams;
    }

    public void setFlowParams(List<FlowParam> flowParams) {
        this.flowParams = flowParams;
    }
}