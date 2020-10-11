import {createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'
import allReducers from './Components/reducers/index'


const initialState = {};

const middleware = [thunk];


const store = createStore(
    allReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
    )
);

export default store;
