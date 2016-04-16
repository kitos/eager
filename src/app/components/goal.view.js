import React, {View, Text, TouchableNativeFeedback} from "react-native";

export default GoalView = ({title, routes}) => (
    <View>
        <Text>{title}</Text>
        <TouchableNativeFeedback onPress={() => routes.goals()}>
            <View>
                <Text>Back</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
);