import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

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
            <FlatButton label="Save" primary={true}
                        onTouchTap={() => this.props.onSubmit(this.state.goal, this.state.timelog)}/>,
            <FlatButton label="Cancel" onTouchTap={this.props.onDialogClose}/>
        ];

        return (
            <Dialog open={this.props.open} onRequestClose={this.props.onDialogClose}
                    actions={actions}>
                <TextField floatingLabelText="Hours" fullWidth={true} value={this.state.timelog.time}
                           onChange={e => this.handleTimeChange(e.target.value)}/>
                <br/>
                <DatePicker value={this.state.timelog.date}
                            disableYearSelection={true}
                            defaultDate={new Date()}
                            firstDayOfWeek={1}
                            onChange={(oldval, newval) => this.handleDateChange(newval)}/>
            </Dialog>
        );
    }

    handleTimeChange(newTime) {
        this.state.timelog.time = newTime;
        this.setState(this.state);
    }

    handleDateChange(newDate) {
        this.state.timelog.date = newDate;
        this.setState(this.state);
    }

}