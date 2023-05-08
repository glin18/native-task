import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TaskCard = ({ category, disable = false }) => {
  const navigator = useNavigation();

  if (disable) {
    return (
      <View className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center">
        <Text className="font-bold text-xl">{category.data.name}</Text>
        <Text className="text-color-gray">
          {category.data.tasks.length} Tasks
        </Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center"
      onPress={() => {
        navigator.navigate("Task", { id: category.id, data: category.data });
      }}
    >
      <Text className="font-bold text-xl">{category.data.name}</Text>
      <Text className="text-color-gray">
        {category.data.tasks.length} Tasks
      </Text>
    </TouchableOpacity>
  );
};

export default TaskCard;
