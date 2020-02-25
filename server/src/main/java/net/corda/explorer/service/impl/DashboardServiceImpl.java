package net.corda.explorer.service.impl;

import net.corda.core.node.NetworkParameters;
import net.corda.core.node.NodeDiagnosticInfo;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.DashboardService;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    @Override
    public NodeDiagnosticInfo nodeDiagnosticInfo(){
        return NodeRPCClient.getRpcProxy().nodeDiagnosticInfo();
    }

    @Override
    public NetworkParameters networkParameters() {
        return NodeRPCClient.getRpcProxy().getNetworkParameters();
    }
}
