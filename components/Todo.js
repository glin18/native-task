import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/themed";
import { TrashIcon } from "react-native-heroicons/outline";

const Todo = ({ todo, isCompleted }) => {
  return (
    <View className="flex-row items-center">
      <CheckBox
        checked={isCompleted}
        checkedColor="black"
        containerStyle={{ backgroundColor: "rgba(52, 52, 52, alpha)" }}
      />
      <Text className="text-lg">{todo}</Text>
      <TouchableOpacity className="ml-auto pr-10">
        <TrashIcon color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
