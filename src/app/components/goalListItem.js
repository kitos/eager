import React, {Text,
    View,
    TouchableNativeFeedback,
    StyleSheet,
    ProgressBarAndroid} from 'react-native';
import Button from  'apsl-react-native-button';

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
    <View style={{flexDirection: 'row'}}>
        <TouchableNativeFeedback
            style={{flex: 1}}
            onPress={props.onGoalPress}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.container}>
                <Text>
                    {props.goal.title}
                </Text>
            </View>
        </TouchableNativeFeedback>
        <Button onPress={props.onRemoveGoalPress}
        style={{backgroundColor:'red'}}>
            Delete
        </Button>
        <View style={styles.hr}/>
    </View>
);

export default GoalListItemComponent;

