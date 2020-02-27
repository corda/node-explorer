package net.corda.explorer.model.response;

import net.corda.core.contracts.ContractState;
import net.corda.core.contracts.StateRef;
import net.corda.core.crypto.TransactionSignature;

import java.util.List;

public class TransactionList {

    private List<TransactionData> transactionData;
    private int totalRecords;

    public int getTotalRecords() {
        return totalRecords;
    }

    public void setTotalRecords(int totalRecords) {
        this.totalRecords = totalRecords;
    }

    public List<TransactionData> getTransactionData() {
        return transactionData;
    }

    public void setTransactionData(List<TransactionData> transactionData) {
        this.transactionData = transactionData;
    }

    public static class TransactionData {
        private List<StateAndType> inputs;
        private List<TypeCount> inputTypes;
        private List<StateAndType> outputs;
        private List<TypeCount> outputTypes;
        private List<String> commands;
        private List<Signer> signers;
        private String transactionId;
        private String notary;

        public List<StateAndType> getInputs() {
            return inputs;
        }

        public void setInputs(List<StateAndType> inputs) {
            this.inputs = inputs;
        }

        public List<StateAndType> getOutputs() {
            return outputs;
        }

        public void setOutputs(List<StateAndType> outputs) {
            this.outputs = outputs;
        }

        public String getTransactionId() {
            return transactionId;
        }

        public void setTransactionId(String transactionId) {
            this.transactionId = transactionId;
        }

        public List<String> getCommands() {
            return commands;
        }

        public void setCommands(List<String> commands) {
            this.commands = commands;
        }

        public List<Signer> getSigners() {
            return signers;
        }

        public void setSigners(List<Signer> signers) {
            this.signers = signers;
        }

        public String getNotary() {
            return notary;
        }

        public void setNotary(String notary) {
            this.notary = notary;
        }

        public List<TypeCount> getInputTypes() {
            return inputTypes;
        }

        public void setInputTypes(List<TypeCount> inputTypes) {
            this.inputTypes = inputTypes;
        }

        public List<TypeCount> getOutputTypes() {
            return outputTypes;
        }

        public void setOutputTypes(List<TypeCount> outputTypes) {
            this.outputTypes = outputTypes;
        }

    }

    public static class Signer{
        private TransactionSignature signature;
        private String partyName;

        public TransactionSignature getSignature() {
            return signature;
        }

        public void setSignature(TransactionSignature signature) {
            this.signature = signature;
        }

        public String getPartyName() {
            return partyName;
        }

        public void setPartyName(String partyName) {
            this.partyName = partyName;
        }
    }

    public static class TypeCount{
        private String type;
        private int count;

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public int getCount() {
            return count;
        }

        public void setCount(int count) {
            this.count = count;
        }
    }

    public static class StateAndType{
        private ContractState state;
        private String type;
        private StateRef stateRef;

        public StateAndType(ContractState state, String type, StateRef stateRef) {
            this.state = state;
            this.type = type;
            this.stateRef = stateRef;
        }

        public ContractState getState() {
            return state;
        }

        public void setState(ContractState state) {
            this.state = state;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public StateRef getStateRef() {
            return stateRef;
        }

        public void setStateRef(StateRef stateRef) {
            this.stateRef = stateRef;
        }
    }
}
