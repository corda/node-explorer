import axios from 'axios';
import axiosRetry from "axios-retry";
import {toastr} from 'react-redux-toastr'
import {NotificationService} from 'r3-tooling-design-system';
import SnackbarComponent from '../components/SnackbarComponent';
export const SERVER_BASE_URL = "http://localhost:8580";
export const LOAD_APP_STATE = "LOAD_APP_STATE";
export const SERVER_AWAKE = 'SERVER_AWAKE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOAD_NETWORK = "LOAD_NETWORK";
export const CHANGE_SCREEN = "CHANGE_SCREEN";
export const LOAD_FLOWS = "LOAD_FLOWS";
export const LOAD_FLOW_PARAMS = "LOAD_FLOW_PARAMS";
export const LOAD_TRNXS = "LOAD_TRANDSACTIONS";
export const LOAD_PARTIES = "LOAD_PARTIES";
export const LOAD_STATES = "LOAD_STATES";
export const LOAD_VAULT_FILTERS = "LOAD_VAULT_FILTERS";
export const UPDATE_PARAM_VAL = "UPDATE_PARAM_VAL";
export const CLOSE_TX_MODAL = "CLOSE_TX_MODAL";
export const OPEN_TX_MODAL = "OPEN_TX_MODAL";
export const SET_FLOW_SELECTION_FLAG = "SET_FLOW_SELECTION_FLAG";
export const SET_INFLIGHT_FLOW_FLAG = "SET_INFLIGHT_FLOW_FLAG";
export const SET_LOGIN_PROCESSING_FLAG = "SET_LOGIN_PROCESSING_FLAG";
export const SHOW_HIDE_SPINNER = "SHOW_HIDE_SPINNER";
export const LOAD_NODE_DIAGNOSTIC = "LOAD_NODE_DIAGNOSTIC";
export const LOAD_NETWORK_PARAMETERS = "LOAD_NETWORK_PARAMETERS";

export const server_awake = () => {
    // Sets flag notifying successful access to Spring server
    return function(dispatch) {
        const retryClient = axios.create({ baseURL: SERVER_BASE_URL })
        axiosRetry(retryClient, { retries: 5, retryDelay: (retryCount) => {
                return retryCount * 2000;
            }});
        retryClient.get("/server_awake")
            .then(({data}) => {
                //console.log(data);
                if(data.status) {
                    dispatch({
                        type: SERVER_AWAKE,
                    })
                }
            })
            // TODO: throw custom internal error
            .catch(error => {
                errorHandler(error);
            });
    }
}

export const login = (loginRequest) => {
    return function(dispatch) {
        dispatch({type: SET_LOGIN_PROCESSING_FLAG, data: true});
        axios.post(SERVER_BASE_URL + "/login", loginRequest)
        .then(({data}) => {
            if(data.status){
                dispatch({
                        type: LOGIN_SUCCESS,
                        payload: data.data
                })
            } else {
                dispatch({type: SET_LOGIN_PROCESSING_FLAG, data: false});
                errorHandler(data);
            }
        })
        .catch(error => {
            dispatch({type: SET_LOGIN_PROCESSING_FLAG, data: false});
            errorHandler(error);
        });
    }
}

export const fetchNodeDiagnostic = () => {
    return function(dispatch) {
        axios.get(SERVER_BASE_URL + "/dashboard/node-diagnostics")
        .then(({data}) => {
            if(data.status){
                dispatch({    
                        type: LOAD_NODE_DIAGNOSTIC,
                        payload: data.data
                })
            }else{
                errorHandler(data);
            }
        })
        .catch(error => {
            errorHandler(error);
        });
    }
}

export const fetchNetworkParameter = () => {
    return function(dispatch) {
        axios.get(SERVER_BASE_URL + "/dashboard/network-parameters")
        .then(({data}) => {
            if(data.status){
                dispatch({    
                        type: LOAD_NETWORK_PARAMETERS,
                        payload: data.data
                })
            }else{
                errorHandler(data);
            }
        })
        .catch(error => {
            errorHandler(error);
        });
    }
}

export const fetchNetworkMap = () => {
    return function(dispatch) {
        dispatch({type: SHOW_HIDE_SPINNER, data: true});
        axios.get(SERVER_BASE_URL + "/network-map")
        .then(({data}) => {
            if(data.status){
                dispatch({    
                        type: LOAD_NETWORK,
                        payload: data.data
                })
            }else{
                errorHandler(data);
            }
            dispatch({type: SHOW_HIDE_SPINNER, data: false});
        })
        .catch(error => {
            dispatch({type: SHOW_HIDE_SPINNER, data: false});
            errorHandler(error);
        });
    }
}

export const fetchFlows = () => {
    return function(dispatch){
        axios.get(SERVER_BASE_URL + "/flow-list")
        .then(({data}) => {
            if(data.status){
                dispatch({    
                    type: LOAD_FLOWS,
                    payload: data.data
                })
            }else{
                errorHandler(data);
            }
        })
        .catch(error => {
            errorHandler(error);
        });
    }
}

export const fetchTransactions = (page) => {
    return function(dispatch){
        dispatch({type: SHOW_HIDE_SPINNER, data: true});
        axios.post(SERVER_BASE_URL + "/transaction-list", page)
        .then(({data}) => {
            if(data.status){
                dispatch({    
                    type: LOAD_TRNXS,
                    payload: data.data
                })
            }else{
                errorHandler(data);
            }
            dispatch({type: SHOW_HIDE_SPINNER, data: false});
        })
        .catch(error => {
            errorHandler(error);
            dispatch({type: SHOW_HIDE_SPINNER, data: false});
        });
    }
}

export const fetchParties = () => {
    return function(dispatch){
        axios.get(SERVER_BASE_URL + "/party-list")
        .then(({data}) => {
            if(data.status){
                dispatch({    
                    type: LOAD_PARTIES,
                    payload: data.data
                })
            }else{
                errorHandler(data);
            }
        })
        .catch(error => {
            errorHandler(error);
        });
    }
}

export const startFlow = (flowInfo) => {
    return function(dispatch){
        axios.post(SERVER_BASE_URL + "/start-flow", flowInfo)
        .then(({data}) => {
            if(data.status){
                //toastr.success("Flow completed successfully!");
                dispatch({type: SET_INFLIGHT_FLOW_FLAG, data: false, message: data.data, messageType: true});
                axios.post(SERVER_BASE_URL + "/transaction-list", {pageSize: 8, offset: 0})
                .then(({data}) => {
                    if(data.status){
                        dispatch({    
                            type: LOAD_TRNXS,
                            payload: data.data
                        })
                         NotificationService.addNotification(
                            <SnackbarComponent variant="success" message="Flow Created"/>
                            );
                    }else{
                        errorHandler(data);
                    }
                })
                .catch(error => {
                    errorHandler(error);
                });
            }else{
                dispatch({type: SET_INFLIGHT_FLOW_FLAG, data: false});
                errorHandler(data);
            }
        })
        .catch(error => {
            dispatch({type: SET_INFLIGHT_FLOW_FLAG, data: false});
            errorHandler(error);
        });
    }
}

export const fetchStates = (filters) => {
    return function(dispatch){
        dispatch({type: SHOW_HIDE_SPINNER, data: true});
        axios.post(SERVER_BASE_URL + "/vault-query", filters)
        .then(({data}) => {
            if(data.status){
                dispatch({    
                    type: LOAD_STATES,
                    payload: data.data
                })
            }else{
                errorHandler(data);
            }
            dispatch({type: SHOW_HIDE_SPINNER, data: false});
        })
        .catch(error => {
            errorHandler(error);
            dispatch({type: SHOW_HIDE_SPINNER, data: false});
        });
    }
}

export const fetchVaultFilters = () => {
    return function(dispatch){
        axios.get(SERVER_BASE_URL + "/vault-filter")
        .then(({data}) => {
            if(data.status){
                dispatch({    
                    type: LOAD_VAULT_FILTERS,
                    payload: data.data
                })
            }else{
                errorHandler(data);
            }
        })
        .catch(error => {
            errorHandler(error);
        });
    }
}

export const updateSettings = (settings, type) => {
    axios.post(SERVER_BASE_URL + "/settings/"+ type, settings)
    .then(({data}) => {
        if (data.status) {
             NotificationService.addNotification(
            <SnackbarComponent className="custom-toast" variant="success" message="Settings updated successfully!" />
            );          
        }else{
            errorHandler(data);
        }
    }).catch( error => {
        errorHandler(error);
    });
}

export const errorHandler = error => {
    if(error.message){       
         NotificationService.addNotification(
            <SnackbarComponent className="custom-toast" variant="danger" message={error.message} />
        );
    }
    else if (error.response) {
        NotificationService.addNotification(
            <SnackbarComponent className="custom-toast" variant="danger" message={error.response.data} />
        );
    } else if (error.request) {
        NotificationService.addNotification(
            <SnackbarComponent className="custom-toast" variant="danger" message="The Server is unavailable, Please try again later!" />
        );
    } else {
        NotificationService.addNotification(
            <SnackbarComponent className="custom-toast" variant="danger" message="Something went wrong, Please try again later" />
        );
    }
}