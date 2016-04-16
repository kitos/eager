import React, {View, ListView, Text} from "react-native";
import {connect} from "react-redux";

/*const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#F5FCFF'
 },
 welcome: {
 fontSize: 20,
 textAlign: 'center',
 margin: 10
 },
 instructions: {
 textAlign: 'center',
 color: '#333333',
 marginBottom: 5
 }
 });*/
const GoalsListComponent = (props) => (
    <View /*style={styles.container}*/>
        {!props.isFetching ? <ListView
            dataSource={props.goals}
            renderRow={(rowData) => <Text>{rowData.title}</Text>}
        />: <Text>{JSON.stringify(props)}</Text>}
    </View>
);


const GoalsListContainer = connect(state => state.goals)(GoalsListComponent);
export default GoalsListContainer;