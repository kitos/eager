import React, {View, ListView, Text, Alert} from "react-native";
import {connect} from "react-redux";
import GoalListItemComponent from './goalListItem'


const onGoalPress = function(){
 
};

const GoalsListComponent = (props) => (
    <View /*style={styles.container}*/>
        {!props.isFetching ? <ListView
            dataSource={props.goals}
            renderRow={(rowData) =><GoalListItemComponent goal={rowData} onGoalPress={onGoalPress}>
            
</GoalListItemComponent>}
        /> : <Text>''</Text>}
    </View>
);


const GoalsListContainer = connect(state => state.goals)(GoalsListComponent);
export default GoalsListContainer;