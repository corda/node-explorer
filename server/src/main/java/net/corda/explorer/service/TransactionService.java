package net.corda.explorer.service;

import net.corda.explorer.model.response.FlowData;
import net.corda.explorer.model.response.TransactionList;

public interface TransactionService {
    FlowData getFlowList();
    TransactionList getTransactionList(int pageSize, int offset);
}
