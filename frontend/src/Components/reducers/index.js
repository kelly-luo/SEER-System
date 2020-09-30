import leftCustomReducer from './leftCustomValue.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    leftCustomValue : leftCustomReducer
})

export default allReducers;