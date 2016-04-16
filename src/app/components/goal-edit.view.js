import React, {View, Text, TouchableNativeFeedback, TextInput} from 'react-native';
import {connect} from "react-redux";

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
                <TouchableNativeFeedback onPress={() => this.props.onSaveGoal({title: this.state.title, description: this.state.description})}>
                    <View>
                        <Text>Save</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.props.routes.goals()}>
                    <View>
                        <Text>Back</Text>
                    </View>
                </TouchableNativeFeedback>
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