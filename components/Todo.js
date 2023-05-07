import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/themed";
import { TrashIcon } from "react-native-heroicons/outline";
import { doc, updateDoc } from "firebase/firestore";

const Todo = ({ item }) => {
  const handleDelete = async () => {
    const taskDocRef = doc(db, "category", id);
    // await updateDoc( , );
  };

  return (
    <View className="flex-row items-center">
      <CheckBox
        checked={item.isCompleted}
        checkedColor="black"
        containerStyle={{ backgroundColor: "rgba(52, 52, 52, alpha)" }}
      />
      <Text className="text-lg">{item.todo}</Text>
      <TouchableOpacity className="ml-auto pr-10">
        <TrashIcon color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
