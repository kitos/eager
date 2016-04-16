import React, {View, ListView, Text} from "react-native";
import {connect} from "react-redux";
import GoalListItemComponent from './goalListItem'


const GoalsListComponent = ({goals, isFetching, onGoalClick}) => (
    <View>
        {!isFetching ? <ListView
            dataSource={goals}
            renderRow={rawGoal => <GoalListItemComponent goal={rawGoal} onGoalPress={() => onGoalClick(rawGoal)}/>}
        /> : <Text>Loading...</Text>}
    </View>
);

const GoalsListContainer = connect(
    state => state.goals,
    (dispatch, ownProps) => {
        return {
            onGoalClick: goal => ownProps.routes.goal(goal)
        }
    }
)(GoalsListComponent);

export default GoalsListContainer;