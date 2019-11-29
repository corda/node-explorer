package net.corda.explorer.model;

public class Message {
    private Command command;
    private Data data;
    private String error;
    private Status status;

    public Message(){
    }

    public Message(Command command, Status status) {
        this.command = command;
        this.status = status;
    }

    public Message(Command command, Data data, Status status) {
        this.command = command;
        this.data = data;
        this.status = status;
    }

    public Message(Command command, String error, Status status) {
        this.command = command;
        this.error = error;
        this.status = status;
    }

    public Command getCommand() {
        return command;
    }

    public void setCommand(Command command) {
        this.command = command;
    }

    public Data getData() {
        return data;
    }

    public void setData(Data data) {
        this.data = data;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
