package net.corda.explorer.service.impl;

import net.corda.core.crypto.CryptoUtils;
import net.corda.core.identity.Party;
import net.corda.core.node.NodeInfo;
import net.corda.explorer.db.CityDB;
import net.corda.explorer.model.response.NetworkMap;
import net.corda.explorer.rpc.NodeRPCClient;
import net.corda.explorer.service.ExplorerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ExplorerServiceImpl implements ExplorerService {

    @Autowired
    private CityDB cityDB;
    private Map<String, String> partyKeyMap = new HashMap<>();

    public Map<String, String> getPartyKeyMap() {
        if(partyKeyMap.keySet().size() == 0)
            getNetworkMap();
        return partyKeyMap;
    }

    @Override
    public List<String> getParties() {
        List<String> parties = new ArrayList<>();
        List<NodeInfo> nodeInfoList = NodeRPCClient.getRpcProxy().networkMapSnapshot();
        NodeInfo selfNodeInfo = NodeRPCClient.getRpcProxy().nodeInfo();

        for(NodeInfo nodeInfo: nodeInfoList){
            if(!(nodeInfo.equals(selfNodeInfo))) {
                parties.add(nodeInfo.getLegalIdentities().get(0).getName().getOrganisation());
            }
        }
        return parties;
    }

    public NetworkMap getNetworkMap(){
        List<NodeInfo> nodeInfoList = NodeRPCClient.getRpcProxy().networkMapSnapshot();
        List<Party> notaries = NodeRPCClient.getRpcProxy().notaryIdentities();
        NetworkMap networkMap = new NetworkMap();

        NodeInfo selfNodeInfo = NodeRPCClient.getRpcProxy().nodeInfo();
        networkMap.setSelf(getNodeDataFromNodeInfo(selfNodeInfo));

        List<NetworkMap.NodeData> notaryList = new ArrayList<>();
        List<NetworkMap.NodeData> peerList = new ArrayList<>();

        for(NodeInfo nodeInfo: nodeInfoList){
            if(!(nodeInfo.equals(selfNodeInfo))) {
                if (notaries.contains(nodeInfo.getLegalIdentities().get(0))) {
                    notaryList.add(getNodeDataFromNodeInfo(nodeInfo));
                } else {
                    peerList.add(getNodeDataFromNodeInfo(nodeInfo));
                }
            }
        }
        networkMap.setNotaries(notaryList);
        networkMap.setPeers(peerList);

        return networkMap;
    }

    private NetworkMap.NodeData getNodeDataFromNodeInfo(NodeInfo nodeInfo){
        NetworkMap.NodeData nodeData = new NetworkMap.NodeData();
        Party party = nodeInfo.getLegalIdentities().get(0);
        CityDB.CityDetail cityDetail = cityDB.getCityDetails(
                party.getName().getLocality() + "_" + party.getName().getCountry());
        nodeData.setName(party.getName().getOrganisation());
        nodeData.setCity(party.getName().getLocality());
        nodeData.setCountry(cityDetail.getCountry());
        nodeData.setLat(cityDetail.getLat());
        nodeData.setLng(cityDetail.getLng());
        nodeData.setPublicKey(CryptoUtils.toStringShort(party.getOwningKey()).substring(0, 25));
        nodeData.setAddress(nodeInfo.getAddresses().get(0).toString());
        partyKeyMap.put(CryptoUtils.toStringShort(party.getOwningKey()), party.getName().getOrganisation());
        return nodeData;
    }

}
