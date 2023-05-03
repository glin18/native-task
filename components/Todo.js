import { View, Text } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/themed";

const Todo = ({ todo, isCompleted }) => {
  return (
    <View className="flex-row items-center">
      <CheckBox
        checked={isCompleted}
        checkedColor="black"
        containerStyle={{ backgroundColor: "rgba(52, 52, 52, alpha)" }}
      />
      <Text className="text-lg">{todo}</Text>
    </View>
  );
};

export default Todo;
