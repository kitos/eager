import {OPEN_LOG_TIME_DIALOG, CLOSE_LOG_TIME_DIALOG, TIMELOG_SAVED} from './../actions/log-time-dialog.actions';

export default function logTimeDialogReducer(state = {open: false, goal: null}, action) {
    switch (action.type) {
        case OPEN_LOG_TIME_DIALOG:
            return {...state, open: true, goal: action.payload};
        case CLOSE_LOG_TIME_DIALOG:
        case TIMELOG_SAVED:
            return {...state, open: false, goal: null};
        default:
            return state;
    }
}