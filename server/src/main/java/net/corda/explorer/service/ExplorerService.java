package net.corda.explorer.service;

import net.corda.explorer.model.response.NetworkMap;

import java.util.List;
import java.util.Map;

public interface ExplorerService {

    NetworkMap getNetworkMap();
    Map<String, String> getPartyKeyMap();
    List<String> getParties();

}
