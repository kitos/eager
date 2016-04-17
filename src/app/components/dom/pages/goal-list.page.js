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
import Schedule from 'material-ui/lib/svg-icons/action/schedule';
import Create from 'material-ui/lib/svg-icons/content/create';
import Colors from 'material-ui/lib/styles/colors';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import GoalEditDialog from './../goal-edit-dialog.component';
import {saveGoal, removeGoal} from './../../../actions/goals.actions';
import {closeNewGoalDialog, openNewGoalDialog} from './../../../actions/goal-dialog.actions.js';
import {openLogTimeDialog, closeLogTimeDialog, saveTimelog} from "../../../actions/log-time-dialog.actions";
import LogTimeDialog from './../log-time-dialog.component';

import charts from 'chart.js';
import {Doughnut} from 'react-chartjs';

const iconButtonElement = (
    <IconButton touch={true}>
        <MoreVertIcon color={Colors.grey400}/>
    </IconButton>
);

var colors = [{
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
},{
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
},{
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
}];

const GoalListPage = ({goals, onDeleteGoal, newGoal, logTime, onDialogClose, onDialogOpen, onTimelogSave, onSaveGoal, onLogTimeDialogClose, onLogTime, dispatch}) => {
    var lastWeek = [6, 5, 4, 3, 2, 1, 0].map(d => {
        var date = new Date();
        date.setDate(date.getDate() - d);
        return date;
    });

    var actual = goals.goals && goals.goals.map(g => {
        if (g && g.timelogs) {
            var total = g.timelogs.reduce((sum, log) => {
                if (Date.now() - (new Date(log.date)).getTime() < 604800000) {
                    return sum + log.time;
                }
                return sum;
            }, 0);
            return {label: g.title, value: total};
        }
        return {name: g.title, value: 0};
    }, 0);

    return (
        <div style={{paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <Doughnut data={actual.map((goal, i) => ({...colors[i], ...goal}))} height="320px"/>
            <List>
                {!goals.isFetching ? goals.goals.map(goal => <ListItem key={goal._id}
                                                                       leftIcon={<Star/>}
                                                                       onTouchTap={() => dispatch(push(`goal/${goal._id}`))}
                                                                       rightIconButton={<IconMenu iconButtonElement={iconButtonElement}>
                                                                            <MenuItem leftIcon={<Schedule/>} onTouchTap={() => onLogTime(goal)}>Log time</MenuItem>
                                                                            <MenuItem leftIcon={<Create/>} onTouchTap={() => onDialogOpen(goal)}>Edit</MenuItem>
                                                                            <MenuItem leftIcon={<Delete/>} onTouchTap={() => onDeleteGoal(goal)}>Delete</MenuItem>
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
    )
};

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
            onTimelogSave: (goal, timelog) => dispatch(saveTimelog(goal, timelog))
        }
    }
)(GoalListPage);