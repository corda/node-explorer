package net.corda.explorer.rpc;

import net.corda.client.rpc.CordaRPCClient;
import net.corda.client.rpc.RPCException;
import net.corda.core.messaging.CordaRPCOps;
import net.corda.core.utilities.NetworkHostAndPort;
import net.corda.explorer.exception.ConnectionException;
import net.corda.explorer.model.request.LoginRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/***
 *
 */
@Component
public class NodeRPCClient {
    private static final Logger logger = LoggerFactory.getLogger(NodeRPCClient.class);

    private static CordaRPCOps rpcProxy;
    private Map<String, String> partyKeyMap = new HashMap<>();

    public static CordaRPCOps getRpcProxy() {
        return rpcProxy;
    }

    public void doLogin(LoginRequest loginRequest) throws ConnectionException {
        try {
            rpcProxy = new CordaRPCClient(NetworkHostAndPort.parse(loginRequest.getHostName() + ":" +
                    loginRequest.getPort())).start(loginRequest.getUsername(), loginRequest.getPassword()).getProxy();
        } catch (RPCException re) {
            throw new ConnectionException(re.getMessage());
        }
    }
}