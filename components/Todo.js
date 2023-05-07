import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/themed";
import { TrashIcon } from "react-native-heroicons/outline";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Todo = ({ item, categoryId, taskData, setTaskData }) => {
  const handleDelete = async () => {
    const taskDocRef = doc(db, "category", categoryId);
    try {
      await updateDoc(taskDocRef, {
        tasks: taskData.tasks.filter((task) => task.id != item.id),
      });
      setTaskData({
        ...taskData,
        tasks: taskData.tasks.filter((task) => task.id != item.id),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View className="flex-row items-center">
      <CheckBox
        checked={item.isCompleted}
        checkedColor="black"
        containerStyle={{ backgroundColor: "rgba(52, 52, 52, alpha)" }}
      />
      <Text className="text-lg">{item.todo}</Text>
      <TouchableOpacity className="ml-auto pr-10" onPress={handleDelete}>
        <TrashIcon color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
