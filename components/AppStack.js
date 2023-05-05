import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Task"
        component={TaskScreen}
        options={{ headerShown: false }}
        initialParams={{ category: "Error", numTasks: "0" }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
