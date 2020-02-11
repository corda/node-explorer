import * as ActionType from '../Actions';

const initialState = {
    vaultStates: [],
    stateMetadata: []
};


const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.LOAD_STATES:
            return {
                ...state,
                vaultStates: action.payload.states,
                stateMetadata: action.payload.statesMetadata,
                totalResults: action.payload.totalStatesAvailable
            } 
        case ActionType.LOAD_VAULT_FILTERS:
            return {
                ...state,
                filters: action.payload
            }  
        default:
            return state;
    }
}

export default reducer;