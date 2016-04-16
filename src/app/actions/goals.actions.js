import {getJson, postJson, putJson} from '../utils/ajax';

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
        payload:goals
    }
}

export function fetchGoals() {
    return (dispatch) => {
        dispatch(requestGoals());
        return getJson('http://192.168.1.239:3000/goals')
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
        return (goal._id ? putJson : postJson)('http://192.168.1.239:3000/goals' + (goal._id ? '/' + goal._id : ''), goal)
            .then(savedGoal => dispatch(goalSaved(savedGoal)))
            .catch(error => dispatch(goalSaved(error, true)));
    }
}