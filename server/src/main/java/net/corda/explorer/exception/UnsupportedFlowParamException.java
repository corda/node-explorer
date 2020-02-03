package net.corda.explorer.exception;

public class UnsupportedFlowParamException extends RuntimeException {
    public UnsupportedFlowParamException(String message){
        super(message);
    }
}
