import {RECEIVE_GOALS, REQUEST_GOALS, GOAL_SAVED, GOAL_REMOVED} from '../actions/goals.actions';

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
            var itemHasBeenAdded = true;
            var newGoals = state.goals.map(g => {
                if (g._id === action.payload._id) {
                    itemHasBeenAdded = false;
                    return {...g, ...action.payload};
                }
                return g;
            });
            return {...state, goals: itemHasBeenAdded ? state.goals.concat([action.payload]) : newGoals};
        case GOAL_REMOVED:
            return {...state, goals: state.goals.filter(goal => goal._id !== action.payload._id)};
        default:
            return state;
    }
}

