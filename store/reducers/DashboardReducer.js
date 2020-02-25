import * as ActionType from '../Actions';

const initialState = {
    nodeDiagnostic: {},
    nodeDiagnosticSpinner: true,
    networkParameter: {},
    networkParameterSpinner: true
};


const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.LOAD_NODE_DIAGNOSTIC:
            return {
                ...state,
                nodeDiagnostic: action.payload,
                nodeDiagnosticSpinner: false
            }
        case ActionType.LOAD_NETWORK_PARAMETERS:
            return{
                ...state,
                networkParameter: action.payload,
                networkParameterSpinner: false
            }
        default:
            return state;    
    }
}

export default reducer;