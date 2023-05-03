import { SafeAreaView, FlatList, View, Text, ScrollView } from "react-native";
import React from "react";
import {
  ArrowLongLeftIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Todo from "../components/Todo";

const DATA = [
  {
    id: "1",
    todo: "First Item",
    isCompleted: false,
  },
  {
    id: "2",
    todo: "Second Item",
    isCompleted: false,
  },
  {
    id: "3",
    todo: "Third Item",
    isCompleted: false,
  },
  {
    id: "4",
    todo: "Fourth Item",
    isCompleted: false,
  },
];

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
      <View className="h-full">
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Todo
              todo={item.todo}
              isCompleted={item.isCompleted}
              keyExtractor={(item) => item.id}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TaskScreen;
