import {CLOSE_NEW_GOAL_DIALOG, OPEN_NEW_GOAL_DIALOG} from './../actions/goal-dialog.actions.js';
import {GOAL_SAVED} from './../actions/goals.actions'

export default function newGoalDialogReducer(state = {open: false, goal: null}, action) {
    switch (action.type) {
        case OPEN_NEW_GOAL_DIALOG:
            return {...state, open: true, goal: action.payload};
        case CLOSE_NEW_GOAL_DIALOG:
        case GOAL_SAVED:
            return {...state, open: false, goal: null};
        default:
            return state;
    }
}