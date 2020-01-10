package net.corda.explorer.model.response;

import net.corda.explorer.constants.MessageConstants;
import org.springframework.http.HttpStatus;

public class MessageResponseEntity<T> {

    private int statusCode;
    private String message;
    private T data;
    private boolean status;

    public MessageResponseEntity(){
        this.statusCode = HttpStatus.OK.value();
        this.status = true;
        message = MessageConstants.SUCCESS;
    }

    public MessageResponseEntity(T data){
        this.data = data;
        this.statusCode = HttpStatus.OK.value();
        this.status = true;
        message = MessageConstants.SUCCESS;
    }

    public MessageResponseEntity(T data, String message){
        this.data = data;
        this.statusCode = HttpStatus.OK.value();
        this.status = true;
        this.message = message;
    }

    public MessageResponseEntity(T data, HttpStatus statusCode){
        this.data = data;
        this.statusCode = statusCode.value();
        this.status = true;
        message = MessageConstants.SUCCESS;
    }

    public MessageResponseEntity(T data, HttpStatus statusCode, boolean status){
        this.data = data;
        this.statusCode = statusCode.value();
        this.status = status;
        message = MessageConstants.SUCCESS;
    }

    public MessageResponseEntity(T data, HttpStatus statusCode, boolean status, String message){
        this.data = data;
        this.statusCode = statusCode.value();
        this.status = status;
        this.message = message;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
