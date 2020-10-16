const addLeft = (value) => {
    return{
        type: 'ADD_LEFT_DROPDOWN',
        payload: value
    };
};

const addMiddle = (value) => {
    return{
        type: 'ADD_MIDDLE_DROPDOWN',
        payload: value
    };
};

const resetMiddle = (value) => {
    return{
        type: 'RESET_LIST',
        payload: value
    };
};

const addRight = (value) => {
    return{
        type: 'ADD_RIGHT_DROPDOWN',
        payload: value
    };
};

export { addLeft, addMiddle, addRight, resetMiddle };
export const USER_LOADING = "USER_LOADING"
export const USER_LOADED = "USER_LOADED"
export const AUTH_ERROR = "AUTH_ERROR"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"
export const GET_ERRORS = "GET_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"
