import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

export default class GoalEditDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        };
    }

    render() {
        var actions = [
            <FlatButton label="Save" primary={true} onTouchTap={() => this.props.onSubmit(this.state)}/>,
            <FlatButton label="Cancel" onTouchTap={this.props.onDialogClose}/>
        ];

        return (
            <Dialog open={this.props.open} onRequestClose={this.props.onDialogClose}
                    actions={actions}>
                <TextField floatingLabelText="Title" fullWidth={true} value={this.state.title} onChange={e => this.setState({title: e.target.value})}/>
                <br/>
                <TextField floatingLabelText="Description" fullWidth={true} value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
            </Dialog>
        );
    }
}