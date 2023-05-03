import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigator = useNavigation();

  return (
    <SafeAreaView>
      <View className="flex-row justify-around mt-5 items-center px-2">
        <View className="p-6">
          <Text className="text-4xl font-bold">Hello Gary</Text>
          <Text>Today you have 4 tasks </Text>
        </View>
        <Image
          source={require("../assets/person-outline.png")}
          style={{ height: 80, width: 80, resizeMode: "contain" }}
        />
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <TouchableOpacity
          className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center"
          onPress={() => {
            navigator.navigate("Task");
          }}
        >
          <Text className="font-bold text-xl">Today</Text>
          <Text className="text-color-gray">4 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center">
          <Text className="font-bold text-xl">Planned</Text>
          <Text className="text-color-gray">4 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center">
          <Text className="font-bold text-xl">Personal</Text>
          <Text className="text-color-gray">4 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center">
          <Text className="font-bold text-xl">Work</Text>
          <Text className="text-color-gray">4 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center">
          <Text className="font-bold text-xl">Shopping</Text>
          <Text className="text-color-gray">4 Tasks</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
