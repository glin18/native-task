import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/themed";
import { TrashIcon } from "react-native-heroicons/outline";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Todo = ({ item, categoryId, taskData, setTaskData }) => {
  const taskDocRef = doc(db, "category", categoryId);
  const handleDelete = async () => {
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

  const onCheck = async () => {
    try {
      await updateDoc(taskDocRef, {
        tasks: taskData.tasks.map((task) => {
          if (task.id != item.id) {
            return task;
          } else {
            task.isCompleted = !task.isCompleted;
            return task;
          }
        }),
      });
      setTaskData({
        ...taskData,
        tasks: taskData.tasks.map((task) => {
          if (task.id != item.id) {
            return task;
          } else {
            task.isCompleted = !task.isCompleted;
          }
        }),
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
        onPress={onCheck}
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
