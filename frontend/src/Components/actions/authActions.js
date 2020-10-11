import axios from 'axios';
import { returnErrors } from "./errorAction"
import { USER_LOADED, USER_LOADING, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL } from "./index"

export const loadUser = () => (dispatch, getState) => {


    if (tokenConfig(getState).headers['x-auth-token'] !== null) {
        dispatch({ type: USER_LOADING });
        axios.get('/users', tokenConfig(getState))
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data,
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status));
                dispatch({
                    type: AUTH_ERROR,
                })
            })
    }


}


export const login = ({ email, password }) => dispatch => {

    axios.post('/login', {
        email: email,
        password: password,
    })
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => {

    return {
        type: LOGOUT_SUCCESS
    }
}

export const register = ({ name, email, password, password2 }) => dispatch => {


    axios.post('/register', {
        name: name,
        email: email,
        password: password,
        password2: password2,
        role: "registeredUser"
    })
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const tokenConfig = getState => {
    const token = getState().auth.token;


    const config = {
        headers: {
            'x-auth-token': token
        }
    }
    return config;

}