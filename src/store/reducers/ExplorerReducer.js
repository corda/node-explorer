import * as ActionType from '../Actions';

const initialState = {
    netWorkMap: {},
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
        default:
            return state;
    }
}

export default reducer;