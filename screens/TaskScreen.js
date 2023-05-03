import { SafeAreaView, FlatList, View, Text } from "react-native";
import React from "react";
import {
  ArrowLongLeftIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const TaskScreen = ({ route }) => {
  const navigator = useNavigation();
  const { category, numTasks } = route.params;
  return (
    <SafeAreaView>
      <View className="flex-row justify-between px-6">
        <ArrowLongLeftIcon
          size={45}
          color="black"
          onPress={() => {
            navigator.navigate("Home");
          }}
        />
        <EllipsisVerticalIcon color="black" size={45} />
      </View>
      <View className="items-center">
        <Text className="text-gray-600 text-lg">{numTasks} Tasks</Text>
        <Text className="font-bold text-3xl">{category}</Text>
      </View>
      <FlatList></FlatList>
    </SafeAreaView>
  );
};

export default TaskScreen;
