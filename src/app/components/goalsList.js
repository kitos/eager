import React, {View, ScrollView, ListView,StyleSheet, Text} from "react-native";
import {connect} from "react-redux";
import GoalListItemComponent from './goalListItem';

const styles = StyleSheet.create({
    container:{
        flex: 1
    }

});

const GoalsListComponent = ({goals, isFetching, onGoalClick}) => (
    <View style={styles.container}>
        {!isFetching ?
            <ListView
                dataSource={goals}
                renderRow={rawGoal => <GoalListItemComponent goal={rawGoal} onGoalPress={() => onGoalClick(rawGoal)}/>}
            />
         : <Text>Loading...</Text>}
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