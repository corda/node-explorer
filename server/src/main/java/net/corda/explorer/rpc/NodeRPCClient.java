package net.corda.explorer.rpc;

import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;
import net.corda.client.rpc.CordaRPCClient;
import net.corda.client.rpc.CordaRPCClientConfiguration;
import net.corda.client.rpc.RPCException;
import net.corda.core.identity.Party;
import net.corda.core.messaging.CordaRPCOps;
import net.corda.core.utilities.NetworkHostAndPort;
import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.request.LoginRequest;
import net.corda.explorer.model.response.Profile;
import net.corda.explorer.service.SSHService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

/***
 *
 */
@Component
public class NodeRPCClient {
    private static final Logger logger = LoggerFactory.getLogger(NodeRPCClient.class);

    private static CordaRPCOps rpcProxy;
    private static Session sshSession;
    private Map<String, String> partyKeyMap = new HashMap<>();

    public static CordaRPCOps getRpcProxy() {
        return rpcProxy;
    }

    public Profile doLogin(LoginRequest loginRequest) throws ConnectionException {

        // depends if the connect is direct or through SSH forwarding
        String hostForRPCClient = loginRequest.getHostName();

        // Check for ssh secure request
        if (loginRequest.getSsh() != null) {
            hostForRPCClient = "localhost";
            try {
                sshSession = SSHService.setupSSHTunnel(loginRequest);
                logger.info("SSH connection established to " + loginRequest.getHostName());
            } catch (JSchException je) {
                throw new ConnectionException(je.getMessage());
            }
        }

        try {
            CordaRPCClientConfiguration config = new CordaRPCClientConfiguration(Duration.ofMinutes(3), 4);
            rpcProxy = new CordaRPCClient(NetworkHostAndPort.parse(hostForRPCClient + ":" +
                    loginRequest.getPort()), config).start(loginRequest.getUsername(), loginRequest.getPassword()).getProxy();

            Party party = rpcProxy.nodeInfo().getLegalIdentities().get(0);
            Profile profile = new Profile();
            profile.setName(party.getName().getOrganisation());
            profile.setCity(party.getName().getLocality());
            profile.setCountry(party.getName().getCountry());
            return profile;
        } catch (RPCException re) {
            throw new ConnectionException(re.getMessage());
        }
    }
}