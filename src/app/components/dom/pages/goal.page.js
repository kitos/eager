import React from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/lib/text-field';

const GoalPage = ({goals, goalId}) => {
    var goal = goals.find(g => g._id == goalId);
    return goal ? (
        <div>
            <TextField floatingLabelText="Title" fullWidth={true} value={goal.title} disabled={true}/>
            <br/>
            <TextField floatingLabelText="Description" fullWidth={true} value={goal.description} disabled={true}/>
        </div>

    ) : <div>Loading...</div>;
};

export default connect(
    state => state.goals,
    (dispatch, ownProps) => ({goalId: ownProps.params.goalId})
)(GoalPage);