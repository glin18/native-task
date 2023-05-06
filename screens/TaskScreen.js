import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  ArrowLongLeftIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Todo from "../components/Todo";
import { Icon } from "@rneui/themed";

// const DATA = [
//   {
//     id: "1",
//     todo: "First Item",
//     isCompleted: false,
//   },
//   {
//     id: "2",
//     todo: "Second Item",
//     isCompleted: false,
//   },
//   {
//     id: "3",
//     todo: "Third Item",
//     isCompleted: false,
//   },
//   {
//     id: "4",
//     todo: "Fourth Item",
//     isCompleted: false,
//   },
// ];

const TaskScreen = ({ route }) => {
  const navigator = useNavigation();
  const { category, tasks } = route.params;
  return (
    <SafeAreaView className="h-full">
      <View className="flex-row justify-between px-6">
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Home");
          }}
        >
          <ArrowLongLeftIcon size={45} color="black" />
        </TouchableOpacity>

        <EllipsisVerticalIcon color="black" size={45} />
      </View>
      <View className="items-center">
        <Text className="text-gray-600 text-lg">{tasks.length} Tasks</Text>
        <Text className="font-bold text-3xl">{category}</Text>
      </View>
      <View className="flex-1">
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Todo
              todo={item.todo}
              isCompleted={item.isCompleted}
              keyExtractor={(item) => item.id}
            />
          )}
        />
      </View>
      <TouchableOpacity>
        <Icon name="add-circle-outline" type="ionicon" size={60} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskScreen;
