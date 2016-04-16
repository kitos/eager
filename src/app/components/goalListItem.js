import React, {Text, View, TouchableNativeFeedback, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff'
    },
    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0
    }
});

const GoalListItemComponent = (props) =>(
    <View>
        <TouchableNativeFeedback
            onPress={props.onGoalPress}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.container}>
                <Text>
                    {props.goal.title}
                </Text>
            </View>
        </TouchableNativeFeedback>
        <View style={styles.hr}/>
    </View>
);

export default GoalListItemComponent;

