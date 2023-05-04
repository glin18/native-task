import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 justify-center px-10 space-y-4"
      >
        <View>
          <Text className="text-4xl font-bold">Register</Text>
          <Text className="text-gray-500 font-bold text-lg">
            Please Register to continue
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
        <TouchableOpacity className="p-4 bg-gray-500 rounded-xl w-36 flex-row space-x-2 justify-center items-center self-end">
          <Text className="text-white font-bold">REGISTER</Text>
          <ArrowRightIcon color="white" size={20} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
