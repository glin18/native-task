import { SafeAreaView, View, Text, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex-row">
        <View className="p-6">
          <Text className="text-4xl font-bold">Hello Gary</Text>
          <Text>Today you have 4 tasks </Text>
        </View>
        <Image
          source={require("../assets/person.png")}
          style={{ height: 80, width: 80, resizeMode: "contain" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
