import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";
import CustomDrawer from "./CustomDrawer";
import CustomizeScreen from "../screens/CustomizeScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
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
      <Drawer.Screen
        name="Customize"
        component={CustomizeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
