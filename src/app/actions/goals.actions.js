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
        payload: [
            {id: '1123123',
            title: '123123123123123'},
            {id: '1123123',
            title: '123123123123123'},
            {id: '1123123',
                title: 'asddasd'},
            {id: '1123123',
                title: 'aasdas'},
            {id: '1123123',
                title: 'asd'},
            {id: '1123123',
                title: 'sdfafsdfasdf'},
            {id: '1123123',
                title: 'sdfsdf'},
            {id: '1123123',
                title: 'sdfsdaf'},
            {id: '1123123',
                title: 'sdafsdf'},
            {id: '1123123',
                title: 'sdfsdfasdf'},
            {id: '1123123',
                title: 'sdfsdfsdf'},
            {id: '1123123',
                title: 'sdfsdfsdfasdf'},
            {id: '1123123',
                title: '123123123sdf123123'},
            {id: '1123123',
                title: '12312312asdfsdf3123123'},
            {id: '1123123',
                title: '1231231sadfsdf23123123'},
            {id: '1123123',
                title: '12312312sdfasdf3123123'},
            {id: '1123123',
                title: '123123123123123'},
            {id: '1123123',
                title: 'asddasd'},
            {id: '1123123',
                title: 'aasdas'},
            {id: '1123123',
                title: 'asd'},
            {id: '1123123',
                title: 'sdfafsdfasdf'},
            {id: '1123123',
                title: 'sdfsdf'},
            {id: '1123123',
                title: 'sdfsdaf'},
            {id: '1123123',
                title: 'sdafsdf'},
            {id: '1123123',
                title: 'sdfsdfasdf'},
            {id: '1123123',
                title: 'sdfsdfsdf'},
            {id: '1123123',
                title: 'sdfsdfsdfasdf'},
            {id: '1123123',
                title: '123123123sdf123123'},
            {id: '1123123',
                title: '12312312asdfsdf3123123'},
            {id: '1123123',
                title: '1231231sadfsdf23123123'},
            {id: '1123123',
                title: '12312312sdfasdf3123123'},
        ]
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