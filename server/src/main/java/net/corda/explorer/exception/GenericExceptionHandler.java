package net.corda.explorer.exception;

import net.corda.explorer.model.response.MessageResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GenericExceptionHandler {

    @ExceptionHandler(GenericException.class)
    public ResponseEntity<MessageResponseEntity<String>> handleGenericExcepion(GenericException ge){
        return new ResponseEntity<MessageResponseEntity<String>>(new MessageResponseEntity<String>(null, HttpStatus.OK, false, ge.getMessage()), HttpStatus.OK);
    }

}
