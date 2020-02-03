package net.corda.explorer.model.response;

import net.corda.explorer.model.common.FlowInfo;

import java.util.List;

public class FlowData {

    private List<FlowInfo> flowInfoList;

    public List<FlowInfo> getFlowInfoList() {
        return flowInfoList;
    }

    public void setFlowInfoList(List<FlowInfo> flowInfoList) {
        this.flowInfoList = flowInfoList;
    }


}
