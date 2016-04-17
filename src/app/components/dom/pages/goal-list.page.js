import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Star from 'material-ui/lib/svg-icons/toggle/star';
import Add from 'material-ui/lib/svg-icons/content/add';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Colors from 'material-ui/lib/styles/colors';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import GoalEditDialog from './../goal-edit-dialog.component';
import {saveGoal, removeGoal} from './../../../actions/goals.actions';
import {closeNewGoalDialog, openNewGoalDialog} from './../../../actions/goal-dialog.actions.js';
import {openLogTimeDialog, closeLogTimeDialog, saveTimelog} from "../../../actions/log-time-dialog.actions";
import LogTimeDialog from './../log-time-dialog.component';

const iconButtonElement = (
    <IconButton touch={true}>
        <MoreVertIcon color={Colors.grey400}/>
    </IconButton>
);

const GoalListPage = ({goals, isFetching, onDeleteGoal, newGoal, logTime, newTimeLog, onDialogClose, onDialogOpen, onTimelogSave, onSaveGoal, onLogTimeDialogClose, onLogTime, dispatch}) => (
    <div>
        <List>
            {!goals.isFetching ? goals.goals.map(goal => <ListItem key={goal._id}
                                                                   leftIcon={<Star/>}
                                                                   onTouchTap={() => dispatch(push(`goal/${goal._id}`))}
                                                                   rightIconButton={<IconMenu iconButtonElement={iconButtonElement}>
                                                                            <MenuItem onTouchTap={() => onLogTime(goal)}>Log time</MenuItem>
                                                                            <MenuItem onTouchTap={() => onDialogOpen(goal)}>Edit</MenuItem>
                                                                            <MenuItem onTouchTap={() => onDeleteGoal(goal)}>Delete</MenuItem>
                                                                        </IconMenu>}
                                                                   primaryText={goal.title}
                                                                   secondaryText={goal.description}/>)
                : ''}
        </List>
        <GoalEditDialog open={newGoal.open} goal={newGoal.goal} onDialogClose={onDialogClose} onSubmit={onSaveGoal}/>
        <LogTimeDialog open={logTime.open} goal={logTime.goal} onDialogClose={onLogTimeDialogClose} onSubmit={onTimelogSave}/>
        <FloatingActionButton style={{position: 'fixed', right: 50, bottom: 50}} onTouchTap={() => onDialogOpen()}>
            <Add/>
        </FloatingActionButton>
    </div>
);

export default connect(
    state => state,
    dispatch => {
        return {
            dispatch,
            onDialogOpen: goal => dispatch(openNewGoalDialog(goal)),
            onDialogClose: () => dispatch(closeNewGoalDialog()),
            onSaveGoal: goal => dispatch(saveGoal(goal)),
            onDeleteGoal: goal => dispatch(removeGoal(goal)),
            onLogTime: goal => dispatch(openLogTimeDialog(goal)),
            onLogTimeDialogClose: () => dispatch(closeLogTimeDialog()),
            onTimelogSave: (goal, timelog) =>  dispatch(saveTimelog(goal, timelog))
        }
    }
)(GoalListPage);