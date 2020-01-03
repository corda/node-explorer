package net.corda.explorer.model.response;

import net.corda.core.contracts.ContractState;
import net.corda.core.crypto.SecureHash;
import net.corda.explorer.model.Data;

import java.util.List;

public class TransactionList extends Data {

    List<TransactionData> transactionData;

    public List<TransactionData> getTransactionData() {
        return transactionData;
    }

    public void setTransactionData(List<TransactionData> transactionData) {
        this.transactionData = transactionData;
    }

    public static class TransactionData {
        private List<ContractState> inputs;
        private List<TypeCount> inputTypes;
        private List<ContractState> outputs;
        private List<TypeCount> outputTypes;
        private List<String> commands;
        private List<Signer> signers;
        private String transactionId;
        private String notary;

        public List<ContractState> getInputs() {
            return inputs;
        }

        public void setInputs(List<ContractState> inputs) {
            this.inputs = inputs;
        }

        public List<ContractState> getOutputs() {
            return outputs;
        }

        public void setOutputs(List<ContractState> outputs) {
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
        private String signingKey;
        private String partyName;

        public String getSigningKey() {
            return signingKey;
        }

        public void setSigningKey(String signingKey) {
            this.signingKey = signingKey;
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
}
