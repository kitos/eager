import React, {View, Text, TouchableNativeFeedback, TextInput} from 'react-native';
import {connect} from "react-redux";

import  * as Button from 'apsl-react-native-button';

import {saveGoal} from './../actions/goals.actions';

class GoalEditView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        }
    }

    render() {
        return (
            <View>
                <TextInput placeholder="Goal title" value={this.state.title} onChangeText={title => this.setState({title})} />
                <TextInput placeholder="Goal description" multiline={true} numberOfLines={3}
                           value={this.state.description} onChangeText={description => this.setState({description})} />
                <Button onPress={() => this.props.onSaveGoal({title: this.state.title, description: this.state.description})}>
                        Save
                </Button>
                <Button onPress={() => this.props.routes.goals()}>
                        Back
                </Button>

            </View>
        )
    }
}

export default connect(
    state => state,
    dispatch => {
        return {
            onSaveGoal: goal => dispatch(saveGoal(goal))
        }
    }
)(GoalEditView);