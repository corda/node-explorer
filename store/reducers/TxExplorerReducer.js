import * as ActionType from '../Actions';

const initialState = {
    registeredFlows: [],
    flowParams: [],
    trnxList:[],
    parties: [],
    showTxPopup: false,
    isFlowSelected: false,
    isFlowInFlight: false,
    flowMessage: "",
    messageType: true
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
                flowParams: action.data,
                flowMessage: "",
                messageType: true
            }
        case ActionType.LOAD_TRNXS:
            return {
                ...state,
                trnxList: action.payload.transactionData,
                trnxListPage: action.payload.totalRecords,
                //showTxPopup: false,
                //isFlowSelected: false
            }       
        case ActionType.LOAD_PARTIES:
            return {
                ...state,
                parties: action.payload
            }   
        case ActionType.UPDATE_PARAM_VAL:
            return{
                ...state,
                flowParams: action.data
            }    
        case ActionType.CLOSE_TX_MODAL:
            return{
                ...state,
                showTxPopup: false,
                isFlowSelected: false,
                flowMessage: "",
                messageType: true
            } 
        case ActionType.OPEN_TX_MODAL:
            return{
                ...state,
                showTxPopup: true       
            }
        case ActionType.SET_FLOW_SELECTION_FLAG:
            return{
                ...state,
                isFlowSelected: true
            }
        case ActionType.SET_INFLIGHT_FLOW_FLAG:
            return{
                ...state,
                isFlowInFlight: action.data,
                flowMessage: action.message,
                messageType: action.messageType
        }           
        default:
            return state;
    }
}

export default reducer;