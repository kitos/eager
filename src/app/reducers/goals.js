import {RECEIVE_GOALS, REQUEST_GOALS} from '../actions/goals.actions';
import * as ListView from "react-native/Libraries/CustomComponents/ListView/ListView";

const initialState = {
    goals: [],
    isFetching: true
};

export default function goals(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GOALS:
            return {...state, isFetching: true};
        case RECEIVE_GOALS:
            let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return {...state, isFetching: false, goals: dataSource.cloneWithRows(action.payload)};
        default:
            return state;
    }
}

