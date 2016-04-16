import {combineReducers} from 'redux';
var {routerReducer} = require('react-native-redux-router');
import goals from './goals'

const rootReducer = combineReducers({
    goals,
    routerReducer
});

export default rootReducer;