import React, {View, ListView, Text, StyleSheet, TouchableNativeFeedback} from "react-native";
import {connect} from "react-redux";
import GoalListItemComponent from './goalListItem';
import {removeGoal} from '../actions/goals.actions'

const styles = StyleSheet.create({
    container:{
        flex: 1
    }

});

const GoalsListComponent = ({goals, isFetching, onGoalClick, onNewGoalClick, onRemoveGoalClick}) => {
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSource = dataSource.cloneWithRows(goals);
    return (
        <View style={styles.container}>
            {<ListView
                dataSource={dataSource}
                renderRow={rawGoal => <GoalListItemComponent goal={rawGoal}
                onGoalPress={() => onGoalClick(rawGoal)}
                onRemoveGoalPress={() => onRemoveGoalClick(rawGoal)}
                />}
            />}
            <TouchableNativeFeedback onPress={onNewGoalClick}>
                <View>
                    <Text>New goal</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

const GoalsListContainer = connect(
    state => state.goals,
    (dispatch, ownProps) => {
        return {
            onGoalClick: goal => ownProps.routes.goal(goal),
            onNewGoalClick: () => ownProps.routes.newGoal(),
            onRemoveGoalClick: goal => dispatch(removeGoal(goal))
        }
    }
)(GoalsListComponent);

export default GoalsListContainer;