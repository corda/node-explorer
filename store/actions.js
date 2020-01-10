import axios from 'axios';
import {toastr} from 'react-redux-toastr'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOAD_NETWORK = "LOAD_NETWORK";
export const TOGGLE_MYIDENTITY = "TOGGLE_MYIDENTITY";
export const TOGGLE_NOTARIES = "TOGGLE_NOTARIES";
export const TOGGLE_PEERS = "TOGGLE_PEERS";
export const CHANGE_SCREEN = "CHANGE_SCREEN";
export const LOAD_FLOWS = "LOAD_FLOWS";
export const LOAD_FLOW_PARAMS = "LOAD_FLOW_PARAMS";
export const LOAD_TRNXS = "LOAD_TRANDSACTIONS";

export const login = (loginRequest) => {
    return function(dispatch) {
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