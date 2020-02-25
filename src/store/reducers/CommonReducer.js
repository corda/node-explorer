import * as ActionType from '../Actions';

const initialState = {
    isServerAwake: false,
    isLoggedIn: false,
    currentPage: 1,
    loginProcessing: false,
    spinner: false,
    profile: {}
};


const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.SERVER_AWAKE:
            return {
                ...state,
                isServerAwake: true
            }
        case ActionType.LOGIN_SUCCESS:
            sessionStorage.setItem('isLoggedIn', true);    
            sessionStorage.setItem('profile', JSON.stringify(action.payload));   
            return {
                ...state,
                isLoggedIn: true,
                profile: action.payload,
                loginProcessing: false
            }
        case ActionType.CHANGE_SCREEN:
            sessionStorage.setItem('currentPage', action.page);    
            return {
                ...state,
                currentPage: action.page
            }
        case ActionType.LOAD_APP_STATE: 
            const isLoggedIn = sessionStorage.getItem("isLoggedIn");
            const currentPage = Number(sessionStorage.getItem("currentPage"));
            const profile =  JSON.parse(sessionStorage.getItem('profile'));   
            return{
                ...state,
                isLoggedIn: isLoggedIn,
                currentPage: currentPage,
                profile: profile
            }
        case ActionType.LOGOUT: 
            sessionStorage.removeItem("isLoggedIn");
            sessionStorage.removeItem("currentPage");
            return{
                ...state,
                isLoggedIn: false,
                currentPage: 0
            }    
        case ActionType.SET_LOGIN_PROCESSING_FLAG:
            return{
                ...state,
                loginProcessing: action.data
            }
        case ActionType.SHOW_HIDE_SPINNER:
            return{
                ...state,
                spinner: action.data
            }     
        default:
            return state;    
    }
}

export default reducer;