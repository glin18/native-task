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
import TaskCard from "../components/TaskCard";
import { Bars3BottomLeftIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigator = useNavigation();

  return (
    <SafeAreaView>
      <View className="px-6">
        <Bars3BottomLeftIcon color="black" size={35} />
      </View>
      <View className="flex-row justify-around mt-2 items-center px-2">
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
        <TaskCard category="Today" numTasks="4" />
        <TaskCard category="Planned" numTasks="4" />
        <TaskCard category="Personal" numTasks="4" />
        <TaskCard category="Work" numTasks="4" />
        <TaskCard category="Shopping" numTasks="4" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
