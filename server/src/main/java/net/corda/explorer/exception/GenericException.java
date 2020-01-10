package net.corda.explorer.exception;

public class GenericException extends RuntimeException {
    public GenericException(){
        super("Something went wrong. Please try again later!!");
    }

    public GenericException(String message){
        super(message);
    }

}
