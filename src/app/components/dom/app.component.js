import React from 'react';

import {connect} from 'react-redux';

import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Star from 'material-ui/lib/svg-icons/toggle/star';
import Add from 'material-ui/lib/svg-icons/content/add';
import Delete from 'material-ui/lib/svg-icons/action/delete';

import GoalEditDialog from './goal-edit-dialog.component';

import {saveGoal, removeGoal} from './../../actions/goals.actions';
import {closeNewGoalDialog, openNewGoalDialog} from './../../actions/new-goal-dialog.actions';

const AppComponent = ({goals, isFetching, onDeleteGoal, newGoal, onDialogClose, onDialogOpen, onSaveGoal}) => (
    <div>
        <AppBar title="Eager" showMenuIconButton={false}/>
        <List>
            {!goals.isFetching ? goals.goals.map(goal => <ListItem key={goal._id}
                                                       leftIcon={<Star/>}
                                                       rightIconButton={<IconButton onTouchTap={() => onDeleteGoal(goal)}><Delete/></IconButton>}
                                                       primaryText={goal.title}
                                                       secondaryText={goal.description}/>)
                : ''}
        </List>
        <GoalEditDialog open={newGoal.open} onDialogClose={onDialogClose} onSubmit={onSaveGoal}/>
        <FloatingActionButton style={{position: 'fixed', right: 50, bottom: 50}} onTouchTap={onDialogOpen}>
            <Add/>
        </FloatingActionButton>
    </div>
);

export default connect(
    state => state,
    dispatch => {
        return {
            onDialogOpen: () => dispatch(openNewGoalDialog()),
            onDialogClose: () => dispatch(closeNewGoalDialog()),
            onSaveGoal: goal => dispatch(saveGoal(goal)),
            onDeleteGoal: goal => dispatch(removeGoal(goal))
        }
    }
)(AppComponent);