import {loginSuccess} from '../Explorer';
import {loadNetworkMap} from '../components/CordaNetwork';

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
            }else if(response.command === 'NETWORKMAP'){
                if(response.status === 'SUCCESS'){
                    loadNetworkMap(response.data);
                }
            }
        }
    )
}