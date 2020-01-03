package net.corda.explorer.model.response;

import net.corda.explorer.model.Data;

import java.util.List;

public class FlowData extends Data {

    private List<FlowInfo> flowInfoList;

    public List<FlowInfo> getFlowInfoList() {
        return flowInfoList;
    }

    public void setFlowInfoList(List<FlowInfo> flowInfoList) {
        this.flowInfoList = flowInfoList;
    }

    public static class FlowInfo {
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

    public static class FlowParam{
        private String paramName;
        private Class paramType;

        public String getParamName() {
            return paramName;
        }

        public void setParamName(String paramName) {
            this.paramName = paramName;
        }

        public Class getParamType() {
            return paramType;
        }

        public void setParamType(Class paramType) {
            this.paramType = paramType;
        }
    }

}
