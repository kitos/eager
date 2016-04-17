import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

export default class GoalEditDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {goal: props.goal || {}};
    }

    componentWillReceiveProps(props) {
        this.state = {goal: props.goal || {}};
    }

    render() {
        var actions = [
            <FlatButton label="Save" primary={true} onTouchTap={() => this.props.onSubmit(this.state.goal)}/>,
            <FlatButton label="Cancel" onTouchTap={this.props.onDialogClose}/>
        ];

        return (
            <Dialog open={this.props.open} onRequestClose={this.props.onDialogClose}
                    actions={actions}>
                <TextField floatingLabelText="Title" fullWidth={true} value={this.state.goal.title} onChange={e => this.handleTitleChange(e.target.value)}/>
                <br/>
                <TextField floatingLabelText="Description" fullWidth={true} value={this.state.goal.description} onChange={e => this.handleDescriptionChange(e.target.value)}/>
                <br/>
                <TextField floatingLabelText="Plan to spend daily" fillWidth={true} value={this.state.goal.plannedDailyTime} onChange={e => this.handlePlannedTimeChange(e.target.value)}/>
            </Dialog>
        );
    }

    handleTitleChange(newTitle) {
        this.state.goal.title = newTitle;
        this.setState(this.state);
    }

    handleDescriptionChange(newDescription) {
        this.state.goal.description = newDescription;
        this.setState(this.state);
    }

    handlePlannedTimeChange(newPlannedDailyTime){
        this.state.goal.plannedDailyTime =  newPlannedDailyTime;
        this.setState(this.state);
    }
}