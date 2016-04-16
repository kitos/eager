/**
 * Created by Pavel on 16/4/2016.
 */
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    Provider,
    connect
} from 'react-redux';

import configureStore from './configureStore';
import {fetchGoals} from "./actions/goals.actions";

import GoalsListContainer from './components/goalsList';

export default function native() {


    let store = configureStore();
    store.dispatch(fetchGoals());

    class Eager extends Component {

        render() {
            return (
                <Provider store={store}>
                    <GoalsListContainer/>
                </Provider>
            );
        }
    }
    AppRegistry.registerComponent('Eager', () => Eager);
}
