import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ArrowRightOnRectangleIcon } from "react-native-heroicons/outline";

const CustomDrawer = (props) => {
  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity className="flex-row gap-x-4 items-center pl-6 mt-4">
        <ArrowRightOnRectangleIcon color="black" size={28} />
        <Text className="font-bold text-xl">Log Out</Text>
      </TouchableOpacity>
      {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView> */}
    </SafeAreaView>
  );
};

export default CustomDrawer;
