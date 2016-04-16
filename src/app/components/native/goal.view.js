import React, {View, Text, TouchableNativeFeedback} from "react-native";
import Button from 'apsl-react-native-button';

export default GoalView = ({title, routes}) => (
    <View>
        <Text>{title}</Text>
        <Button onPress={() => routes.goals()} style={{backgroundColor: 'green'}}>
                Back
        </Button>
    </View>
);