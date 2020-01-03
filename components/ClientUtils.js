import {loginSuccess} from '../Explorer';
import {loadNetworkMap} from '../screens/CordaNetwork';
import {loadFlowList, loadTrnxList} from '../screens/TransactionExplorer';

export const fetchNetworkMap = (stompClient, message) => {
    stompClient.send("/server/networkMap", {}, 
        JSON.stringify(message)
    );
}

export const subscribeGeneral = (stompClient) => {
    stompClient.subscribe('/client/general', 
        (message) => {
            let response = JSON.parse(message.body);
            if(response.command === 'CONNECT'){
                if(response.status === 'SUCCESS'){
                    loginSuccess();
                }
            }else if(response.command === 'NETWORK_MAP'){
                if(response.status === 'SUCCESS'){
                    loadNetworkMap(response.data);
                }
            }else if(response.command === 'FLOW_LIST'){
                if(response.status === 'SUCCESS'){
                    loadFlowList(response.data);
                }
            }else if(response.command === 'TRNX_LIST'){
                if(response.status === 'SUCCESS'){
                    loadTrnxList(response.data);
                }
            }
        }
    )
}