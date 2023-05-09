import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TrashIcon } from "react-native-heroicons/outline";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const TaskCard = ({ category, disable = false, setCategories, categories }) => {
  const navigator = useNavigation();

  const categoryDoc = doc(db, "category", category.id);

  const deleteCategory = async () => {
    try {
      await deleteDoc(categoryDoc);
      setCategories(categories.filter((doc) => doc.id != category.id));
    } catch (err) {
      console.error(err);
    }
  };

  if (disable) {
    return (
      <View className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-row justify-between items-center">
        <View style={{ opacity: 0 }}>
          <TrashIcon />
        </View>
        <View className="justify-center items-center pl-3">
          <Text className="font-bold text-xl">{category.data.name}</Text>
          <Text className="text-color-gray">
            {category.data.tasks.length} Tasks
          </Text>
        </View>

        <TouchableOpacity className="pr-3" onPress={deleteCategory}>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      className="bg-white w-72 h-24 shadow-md rounded-lg mt-4 flex-col justify-center items-center"
      onPress={() => {
        navigator.navigate("Task", { id: category.id, data: category.data });
      }}
    >
      <Text className="font-bold text-xl">{category.data.name}</Text>
      <Text className="text-color-gray">
        {category.data.tasks.length} Tasks
      </Text>
    </TouchableOpacity>
  );
};

export default TaskCard;
