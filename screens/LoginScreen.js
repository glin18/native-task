import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 justify-center px-10 space-y-4"
      >
        <View>
          <Text className="text-4xl font-bold">Login</Text>
          <Text className="text-gray-500 font-bold text-lg">
            Please sign in to continue
          </Text>
        </View>

        <TextInput
          placeholder="Email"
          className="border-2 border-gray-400 rounded-lg p-2"
        />

        <TextInput
          placeholder="Password"
          className="border-2 border-gray-400 rounded-lg p-2"
        />
      </KeyboardAvoidingView>
      <View className="flex-row justify-center pb-3">
        <Text className="align-center font-bold text-lg text-gray-500">
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className=" font-bold text-lg text-gray-700"> Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
