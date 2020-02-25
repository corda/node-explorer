package net.corda.explorer.service;

import net.corda.core.node.NetworkParameters;
import net.corda.core.node.NodeDiagnosticInfo;

public interface DashboardService {
    NodeDiagnosticInfo nodeDiagnosticInfo();
    NetworkParameters networkParameters();
}
