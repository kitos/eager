import {RECEIVE_GOALS, REQUEST_GOALS, GOAL_SAVED} from '../actions/goals.actions';
import * as ListView from "react-native/Libraries/CustomComponents/ListView/ListView";

const initialState = {
    goals: [],
    isFetching: false,
    isInited: false
};

export default function goals(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GOALS:
            return {...state, isFetching: true};
        case RECEIVE_GOALS:
            return {...state, isFetching: false, isInited: true, goals: action.payload};
        case GOAL_SAVED:
            return {...state, goals: state.goals.concat([action.payload])};
        default:
            return state;
    }
}

