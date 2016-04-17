import * as React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';

import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import goalsReducer from './reducers/goals.reducer';
import newGoal from './reducers/goal-dialog.reducer';
import {fetchGoals} from './actions/goals.actions';

import App from './components/dom/app.component';
import GoalListPage from './components/dom/pages/goal-list.page';
import GoalPage from './components/dom/pages/goal.page';

injectTapEventPlugin();

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory);

let store = createStore(
    combineReducers({
        goals: goalsReducer,
        newGoal,
        routing: routerReducer
    }),
    applyMiddleware(thunkMiddleware, middleware)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

//TODO: request data only on page opening
store.dispatch(fetchGoals());

document.addEventListener('DOMContentLoaded', () => render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={GoalListPage}/>
                <Route path="goals" component={GoalListPage}/>
                <Route path="goal/:goalId" component={GoalPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app-root')));