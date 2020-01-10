import * as ActionType from '../Actions';

const initialState = {
    netWorkMap: {},
    showMyIdentity: true,
    showNotaries: true,
    showPeers: true,
};


const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.LOAD_NETWORK:
            return {
                ...state,
                netWorkMap: action.payload
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