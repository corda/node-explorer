import * as ActionType from '../Actions';

const initialState = {
    registeredFlows: [],
    flowParams: [],
    trnxList:[],
    parties: []
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.LOAD_FLOWS:
            return {
                ...state,
                registeredFlows: action.payload.flowInfoList
            }
        case ActionType.LOAD_FLOW_PARAMS:
            return {
                ...state,
                flowParams: action.data
            }
        case ActionType.LOAD_TRNXS:
            return {
                ...state,
                trnxList: action.payload.transactionData,
                trnxListPage: action.payload.totalRecords
            }       
        case ActionType.LOAD_PARTIES:
            return {
                ...state,
                parties: action.payload
            }   
        default:
            return state;
    }
}

export default reducer;