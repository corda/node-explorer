import * as ActionType from '../Actions';

const initialState = {
    isServerAwake: false,
    isLoggedIn: false,
    currentPage: 1
};


const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.SERVER_AWAKE:
            return {
                ...state,
                isServerAwake: true
            }
        case ActionType.LOGIN_SUCCESS:
            localStorage.setItem('isLoggedIn', true);    
            return {
                ...state,
                isLoggedIn: true
            }
        case ActionType.CHANGE_SCREEN:
            localStorage.setItem('currentPage', action.page);    
            return {
                ...state,
                currentPage: action.page
            }
        case ActionType.LOAD_APP_STATE: 
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            const currentPage = Number(localStorage.getItem("currentPage"));
            return{
                ...state,
                isLoggedIn: isLoggedIn,
                currentPage: currentPage
            }
        default:
            return state;    
    }
}

export default reducer;