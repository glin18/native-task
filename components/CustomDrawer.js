import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { auth } from "../firebaseConfig";
import { useAuth } from "../hooks/useAuth";

const CustomDrawer = (props) => {
  const { setCurrentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="pl-6 mt-1 flex-row items-center gap-x-4">
        <UserIcon color="black" size={28} />
        <Text className="font-bold text-lg">{auth?.currentUser?.email}</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          margin: 20,
        }}
      />
      <TouchableOpacity className="flex-row gap-x-4 items-center pl-6 mt-4">
        <Cog6ToothIcon color="black" size={28} />
        <Text className="font-bold text-xl">Customize</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSignOut}
        className="flex-row gap-x-4 items-center pl-6 mt-4"
      >
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
