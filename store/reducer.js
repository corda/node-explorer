import * as ActionType from './actions';
import {subscribeGeneral} from '../components/ClientUtils';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient = {};

const socket = SockJS('http://localhost:8080/session');
stompClient = Stomp.over(socket);
stompClient.connect({}, () => subscribeGeneral(stompClient));

const initialState = {
    isLoggedIn: false,
    wsClient: stompClient,
    netWorkMap: {},
    showMyIdentity: true,
    showNotaries: true,
    showPeers: true
};


const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.LOGIN_SUCCESS:
            console.log(state);
            return {
                ...state,
                isLoggedIn: true
            }
        case ActionType.LOGIN_ACTION:
            stompClient.send("/server/login", {}, 
                JSON.stringify(action.message)
            );    
            return state;
        case ActionType.FETCH_NETWORK:
                stompClient.send("/server/networkMap", {}, );    
            return state;
        case ActionType.LOAD_NETWORK:
            return {
                ...state,
                netWorkMap: action.data
            }
        case ActionType.TOGGLE_MYIDENTITY:
            return{
                ...state,
                showMyIdentity: !state.showMyIdentity
            }  
        case ActionType.TOGGLE_NOTARIES:
            return{
                ...state,
                showNotaries: !state.showNotaries
            }
        case ActionType.TOGGLE_PEERS:
            return{
                ...state,
                showPeers: !state.showPeers
            }            
        default:
            return state;
    }
}

export default reducer;