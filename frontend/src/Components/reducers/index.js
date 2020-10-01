import leftCustomReducer from './leftCustomValue.js';
import operatorCustomReducer from './operatorCustomValue.js';
import rightCustomReducer from './rightCustomValue.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    leftCustomValue : leftCustomReducer,
    operatorCustomValue : operatorCustomReducer,
    rightCustomValue : rightCustomReducer
})

export default allReducers;