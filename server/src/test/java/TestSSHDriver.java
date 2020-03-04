import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;
import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.request.LoginRequest;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.SSHService;

public class TestSSHDriver {

    static NodeRPCClient rpcClient;
    static LoginRequest loginRequest;

    public static void main(String[] args) throws ConnectionException {
        loginRequest = new LoginRequest();
        loginRequest.setHostName("localhost");
        loginRequest.setPort(10004);
        loginRequest.setUsername("user1");
        loginRequest.setPassword("test");

        rpcClient = new NodeRPCClient();
        connector();
    }

    private static void connector() {
        try{
            JSch jsch=new JSch();

            // Props from user needed:
            // sshUser, sshHost, sshPort, sshPassword OR sshKey

            // Create session for tunnel
            Session session=jsch.getSession("anixon604", "51.105.59.148", 22);
            session.setConfig("StrictHostKeyChecking", "no");
            session.setPassword("Testertester!");

            UserInfo ui = new SSHService.LocalUserInfo();
            session.setUserInfo(ui);

            session.connect();

            if (session.isConnected()) {
                System.out.println("Connected to host!!!");
                session.setPortForwardingL(10004, "localhost", 10004);
            }

            rpcClient.doLogin(loginRequest);

            System.out.println(NodeRPCClient.getRpcProxy().nodeInfo());
            System.out.println(NodeRPCClient.getRpcProxy().registeredFlows());

            session.disconnect();

        }
        catch(Exception e){
            System.out.println(e);
        }
    }


}

