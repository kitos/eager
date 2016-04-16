import React, {
    AppRegistry,
    Component,
    Text,
    View
} from 'react-native';

import {
    Provider,
    connect
} from 'react-redux';

import {Router, Route, Animations, Schema} from 'react-native-redux-router';

import configureStore from './configureStore';
import {fetchGoals} from "./actions/goals.actions";

import GoalsListContainer from './components/goalsList';
import GoalView from './components/goal.view';

export default function native() {


    let store = configureStore();
    store.dispatch(fetchGoals());

    class Eager extends Component {

        render() {
            return (
                <Provider store={store}>
                    <View style={{flex:1}}>
                        <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
                        <Router>
                            <Schema name="default" sceneConfig={Animations.FlatFloatFromRight}/>

                            <Route name="goals" component={GoalsListContainer} initial={true} title="Goals"/>
                            <Route name="goal" component={GoalView}/>
                        </Router>
                    </View>
                </Provider>
            );
        }
    }
    AppRegistry.registerComponent('Eager', () => Eager);
}
