import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TaskCard = ({ category, numTasks }) => {
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center"
      onPress={() => {
        navigator.navigate("Task", { category, numTasks });
      }}
    >
      <Text className="font-bold text-xl">{category}</Text>
      <Text className="text-color-gray">{numTasks} Tasks</Text>
    </TouchableOpacity>
  );
};

export default TaskCard;
