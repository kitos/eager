import {getJson} from '../utils/ajax';

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