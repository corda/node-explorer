package net.corda.explorer.model.common;

import java.util.List;

public class FlowParam {
    private String paramName;
    private Class paramType;
    private Object paramValue;
    private Class parameterizedType;
    private boolean hasParameterizedType;
    private List<FlowParam> flowParams;

    public List<FlowParam> getFlowParams() {
        return flowParams;
    }

    public void setFlowParams(List<FlowParam> flowParams) {
        this.flowParams = flowParams;
    }

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

    public Class getParameterizedType() {
        return parameterizedType;
    }

    public void setParameterizedType(Class parameterizedType) {
        this.parameterizedType = parameterizedType;
    }

    public Boolean getHasParameterizedType() {
        return hasParameterizedType;
    }

    public void setHasParameterizedType(Boolean hasParameterizedType) {
        this.hasParameterizedType = hasParameterizedType;
    }

    public Object getParamValue() {
        return paramValue;
    }

    public void setParamValue(Object paramValue) {
        this.paramValue = paramValue;
    }

    public boolean isHasParameterizedType() {
        return hasParameterizedType;
    }

    public void setHasParameterizedType(boolean hasParameterizedType) {
        this.hasParameterizedType = hasParameterizedType;
    }
}
