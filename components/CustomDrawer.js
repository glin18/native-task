import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView> */}
    </View>
  );
};

export default CustomDrawer;
