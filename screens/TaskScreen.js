import { SafeAreaView, FlatList, View, Text } from "react-native";
import React from "react";
import {
  ArrowLongLeftIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const TaskScreen = () => {
  const navigator = useNavigation();

  return (
    <SafeAreaView>
      <View className="flex-row justify-between p-6">
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
        <Text className="text-gray-600 text-lg">8 Tasks</Text>
        <Text className="font-bold text-3xl">Personal</Text>
      </View>
      <FlatList></FlatList>
    </SafeAreaView>
  );
};

export default TaskScreen;
