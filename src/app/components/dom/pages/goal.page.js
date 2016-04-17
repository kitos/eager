import React from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/lib/text-field';

import charts from 'chart.js';
import {Line} from 'react-chartjs';

var dayNames = ["Sun", "Mon", "Thus", "Wed", "Thurs", "Fri", "Set"];

var actualDataSetConf = {
    label: "Actual work",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)"
};

var plannedDataSetConf = {
    label: "Planned work",
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)"
};

const GoalPage = ({goals, goalId}) => {
    var goal = goals.find(g => g._id == goalId);
    var lastWeek = [6, 5, 4, 3, 2, 1, 0].map(d => {
        var date = new Date();
        date.setDate(date.getDate() - d);
        return date;
    });

    var lastWeekDayNames = lastWeek.map(d => `${dayNames[d.getDay()]} (${d.getDate()}.${d.getMonth() + 1})`);

    var lastWeekActual = lastWeek.map(d => {
        if (goal && goal.timelogs) {
            return goal.timelogs.reduce((sum, log) => {
                var logDate = new Date(log.date);
                if (logDate.getFullYear() === d.getFullYear() && logDate.getMonth() == d.getMonth() && logDate.getDate() === d.getDate()) {
                    return sum + log.time;
                }
                return sum;
            }, 0);
        }
        return 0;
    });

    return goal ? (
        <div
            style={{display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', padding: 20, boxSizing: 'border-box'}}>
            <TextField floatingLabelText="Title" fullWidth={true} value={goal.title} disabled={true}/>
            <br/>
            <TextField floatingLabelText="Description" fullWidth={true} value={goal.description} disabled={true}/>
            <br/>
            <Line data={{labels: lastWeekDayNames, datasets: [
                Object.assign({}, actualDataSetConf, {data: lastWeekActual}),
                Object.assign({}, plannedDataSetConf, {data: lastWeek.map(d => goal && goal.plannedDailyTime || 2)})
            ]}} width="700" height="400"/>
        </div>

    ) : <div>Loading...</div>;
};

export default connect(
    state => state.goals,
    (dispatch, ownProps) => ({goalId: ownProps.params.goalId})
)(GoalPage);