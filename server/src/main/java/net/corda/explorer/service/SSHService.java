package net.corda.explorer.service;

import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;
import net.corda.explorer.model.request.LoginRequest;

public interface SSHService {
    static Session setupSSHTunnel(LoginRequest loginRequest) throws JSchException {
        JSch jSch = new JSch();
        String sshHost = loginRequest.getHostName();
        int nodePort = loginRequest.getPort();

        int sshPort = Integer.parseInt((String)loginRequest.getSsh().get("port"));
        String sshUsername = (String) loginRequest.getSsh().get("username");
        String sshPassword = (String) loginRequest.getSsh().get("password");

        Session sshSession = jSch.getSession(sshUsername, sshHost, sshPort);
        sshSession.setConfig("StrictHostKeyChecking", "no");
        sshSession.setPassword(sshPassword);

        UserInfo userInfo = new LocalUserInfo();
        sshSession.setUserInfo(userInfo);

        sshSession.connect();

        if (sshSession.isConnected()) {
            sshSession.setPortForwardingL(nodePort, "localhost", nodePort);
        }

        return sshSession;
    }

    class LocalUserInfo implements UserInfo {
        String passwd;
        public String getPassword(){ return passwd; }
        public boolean promptYesNo(String str){return true;}
        public String getPassphrase(){ return null; }
        public boolean promptPassphrase(String message){return true; }
        public boolean promptPassword(String message){return true;}
        public void showMessage(String message){}
    }

}
