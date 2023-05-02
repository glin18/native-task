import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-around mt-5 items-center px-2">
        <View className="p-6">
          <Text className="text-4xl font-bold">Hello Gary</Text>
          <Text>Today you have 4 tasks </Text>
        </View>
        <Image
          source={require("../assets/person.png")}
          style={{ height: 80, width: 80, resizeMode: "contain" }}
        />
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View className="bg-white w-64 h-24 shadow-md rounded-lg mt-4">
          <Text>Today</Text>
          <Text>4 Tasks</Text>
        </View>
        <View className="bg-white w-64 h-24 shadow-md rounded-lg mt-4">
          <Text>Today</Text>
          <Text>4 Tasks</Text>
        </View>
        <View className="bg-white w-64 h-24 shadow-md rounded-lg mt-4">
          <Text>Today</Text>
          <Text>4 Tasks</Text>
        </View>
        <View className="bg-white w-64 h-24 shadow-md rounded-md mt-4">
          <Text>Today</Text>
          <Text>4 Tasks</Text>
        </View>
        <View className="bg-white w-64 h-24 shadow-md rounded-lg mt-4">
          <Text>Today</Text>
          <Text>4 Tasks</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
