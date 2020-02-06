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
                stateMetadata: action.payload.statesMetadata
            } 
        default:
            return state;
    }
}

export default reducer;