import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
} from "react-native";
import React from "react";
import { auth } from "../firebaseConfig";

const LoginScreen = () => {
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
          className="border-2 border-gray-400 shadow-lg rounded-lg p-2"
        />

        <TextInput
          placeholder="Password"
          className="border-2 shadow-lg border-gray-400 rounded-lg p-2"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
