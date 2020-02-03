package net.corda.explorer.controller;

import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.common.FlowInfo;
import net.corda.explorer.model.request.PageRequest;
import net.corda.explorer.model.response.FlowData;
import net.corda.explorer.model.response.MessageResponseEntity;
import net.corda.explorer.model.response.TransactionList;
import net.corda.explorer.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/flow-list")
    public MessageResponseEntity<FlowData> getRegisteredFlows(){
        try{
            return new MessageResponseEntity<>(transactionService.getFlowList());
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }

    @PostMapping("/transaction-list")
    public MessageResponseEntity<TransactionList> transactionList(@RequestBody PageRequest pageRequest){
        try {
            TransactionList transactionList = transactionService.getTransactionList(pageRequest.getPageSize(), pageRequest.getOffset());
            return new MessageResponseEntity<>(transactionList);
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }

    @PostMapping("/start-flow")
    public MessageResponseEntity<String> startFlow(@RequestBody FlowInfo flowInfo){
        try {
            transactionService.triggerFlow(flowInfo);
            return new MessageResponseEntity<>();
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }
}