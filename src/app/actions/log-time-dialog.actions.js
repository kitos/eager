import {getJson, postJson, putJson, deleteJson} from '../utils/ajax';
export const OPEN_LOG_TIME_DIALOG = 'open_log_time_dialog';

export function openLogTimeDialog(goal) {
    return {
        type: OPEN_LOG_TIME_DIALOG,
        payload: goal
    }
}

export const CLOSE_LOG_TIME_DIALOG = 'close_log_time_dialog';

export function closeLogTimeDialog() {
    return {
        type: CLOSE_LOG_TIME_DIALOG
    }
}

export const SAVE_TIMELOG = 'save_timelog';

export function saveTimelog(goal, timelog) {
    return dispatch => {
        dispatch({type: SAVE_TIMELOG, payload: timelog});
        return postJson(`/goals/${goal._id}/timelogs`, timelog)
            .then(goal => dispatch(timelogSaved(goal)))
            .catch(error => dispatch(timelogSaved(goal)));
    }
}

export const TIMELOG_SAVED = 'timelog_saved';

export function timelogSaved(goal) {
    return {
        type: TIMELOG_SAVED,
        payload: goal
    }
}