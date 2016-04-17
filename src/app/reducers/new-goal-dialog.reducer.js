import {CLOSE_NEW_GOAL_DIALOG, OPEN_NEW_GOAL_DIALOG} from './../actions/new-goal-dialog.actions';

export default function newGoalDialogReducer(state = {open: false}, action) {
    switch (action.type) {
        case OPEN_NEW_GOAL_DIALOG:
            return {...state, open: true};
        case CLOSE_NEW_GOAL_DIALOG:
            return {...state, open: false};
        default:
            return state;
    }
}