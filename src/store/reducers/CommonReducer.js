import * as ActionType from '../Actions';

const initialState = {
    isLoggedIn: false,
    currentPage: 1
};


const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case ActionType.CHANGE_SCREEN:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;    
    }
}

export default reducer;