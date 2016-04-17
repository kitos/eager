import {getJson, postJson, putJson, deleteJson} from '../utils/ajax';

export const REQUEST_GOALS = 'request_goals';

export function requestGoals(goals) {
    return {
        type: REQUEST_GOALS
    }
}

export const RECEIVE_GOALS = 'receive_goals';

export function receiveGoals(goals) {
    return {
        type: RECEIVE_GOALS,
        payload: goals
    }
}

export function fetchGoals() {
    return (dispatch) => {
        dispatch(requestGoals());
        return getJson('goals')
            .then(goals => dispatch(receiveGoals(goals)))
            .catch(error => dispatch(receiveGoals([JSON.stringify(error)])));
    }
}

export const GOAL_SAVED = 'goal_saved';

export function goalSaved(goal) {
    return {
        type: GOAL_SAVED,
        payload: goal
    }
}

export const SAVE_GOAL = 'save_goal';

export function saveGoal(goal) {
    return dispatch => {
        dispatch({type: SAVE_GOAL, payload: goal});
        return (goal._id ? putJson : postJson)('goals' + (goal._id ? '/' + goal._id : ''), goal)
            .then(savedGoal => dispatch(goalSaved(savedGoal)))
            .catch(error => dispatch(goalSaved(error, true)));
    }
}

export const GOAL_REMOVED = 'goal_removed';

export function goalRemoved(goal) {
    return {
        type: GOAL_REMOVED,
        payload: goal
    }
}

export const REMOVE_GOAL = 'remove_goal';

export function removeGoal(goal) {
    return (dispatch) => {
        dispatch({type: REMOVE_GOAL, payload: goal});
        return deleteJson('goals/' + goal._id, goal)
            .then(goal => dispatch(goalRemoved(goal)))
            .catch(error => dispatch(goalRemoved(goal)));
    }
}