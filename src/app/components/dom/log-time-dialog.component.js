import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

export default class LogTimeDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {goal: props.goal, timelog: {}};
    }

    componentWillReceiveProps(props) {
        this.state = {goal: props.goal, timelog: {}};
    }

    render() {
        var actions = [
            <FlatButton label="Save" primary={true} onTouchTap={() => this.props.onSubmit(this.state.goal, this.state.timelog)}/>,
            <FlatButton label="Cancel" onTouchTap={this.props.onDialogClose}/>
        ];

        return (
            <Dialog open={this.props.open} onRequestClose={this.props.onDialogClose}
                    actions={actions}>
                <TextField floatingLabelText="Hours" fullWidth={true} value={this.state.timelog.time} onChange={e => this.handleTimeChange(e.target.value)}/>
                <br/>
            </Dialog>
        );
    }

    handleTimeChange(newTitle) {
        this.state.timelog.time = newTitle;
        this.setState(this.state);
    }
    
}