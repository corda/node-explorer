package net.corda.explorer.model.request;

import java.util.Map;

public class LoginRequest {

    private String hostName;
    private int port;
    private String username;
    private String password;
    private Map ssh;

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Map getSsh() {
        return ssh;
    }

    public void setSsh(Map ssh) {
        this.ssh = ssh;
    }
}
