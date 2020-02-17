import axios from 'axios';
import {toastr} from 'react-redux-toastr'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOAD_NETWORK = "LOAD_NETWORK";
export const CHANGE_SCREEN = "CHANGE_SCREEN";
export const LOAD_FLOWS = "LOAD_FLOWS";
export const LOAD_FLOW_PARAMS = "LOAD_FLOW_PARAMS";
export const LOAD_TRNXS = "LOAD_TRANDSACTIONS";
export const LOAD_PARTIES = "LOAD_PARTIES";
export const LOAD_STATES = "LOAD_STATES";
export const LOAD_VAULT_FILTERS = "LOAD_VAULT_FILTERS";

export const login = (loginRequest) => {
    return function(dispatch) {
        console.log(loginRequest);
        axios.post("http://localhost:8080/login", loginRequest)
        .then(({data}) => {
            if(data.status){
                dispatch({    
                        type: LOGIN_SUCCESS,
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
        axios.get("http://localhost:8080/network-map")
        .then(({data}) => {
            if(data.status){
                dispatch({    
                        type: LOAD_NETWORK,
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

export const fetchFlows = () => {
    return function(dispatch){
        axios.get("http://localhost:8080/flow-list")
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
        axios.post("http://localhost:8080/transaction-list", page)
        .then(({data}) => {
            if(data.status){
                dispatch({    
                    type: LOAD_TRNXS,
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

export const fetchParties = () => {
    return function(dispatch){
        axios.get("http://localhost:8080/party-list")
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
        axios.post("http://localhost:8080/start-flow", flowInfo)
        .then(({data}) => {
            if(data.status){
                toastr.success("Flow completed successfully!");
                axios.post("http://localhost:8080/transaction-list", {pageSize: 10, offset: 0})
                .then(({data}) => {
                    if(data.status){
                        dispatch({    
                            type: LOAD_TRNXS,
                            payload: data.data
                        })
                    }else{
                        errorHandler(data);
                    }
                })
                .catch(error => {
                    errorHandler(error);
                });
            }else{
                errorHandler(data);
            }
        })
        .catch(error => {
            errorHandler(error);
        });
    }
}

export const fetchStates = (filters) => {
    return function(dispatch){
        axios.post("http://localhost:8080/vault-query", filters)
        .then(({data}) => {
            if(data.status){
                dispatch({    
                    type: LOAD_STATES,
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

export const fetchVaultFilters = () => {
    return function(dispatch){
        axios.get("http://localhost:8080/vault-filter")
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


const errorHandler = error => {
    if(error.message){
        toastr.error(error.message);
    }
    else if (error.response) {
        toastr.error(error.response.data);
    } else if (error.request) {
        toastr.error('The Server is unavailable, Please try again later!');
    } else {
        toastr.error('Something went wrong, Please try again later');
    }
}