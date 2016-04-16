import {combineReducers} from 'redux';
import {routerReducer} from 'react-native-redux-router';
import goals from './goals.reducer'

const rootReducer = combineReducers({
    goals,
    routerReducer
});

export default rootReducer;