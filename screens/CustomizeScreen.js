import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import {
  Bars3BottomLeftIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TaskCard from "../components/TaskCard";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { Icon } from "@rneui/themed";

export default function CustomizeScreen() {
  const navigator = useNavigation();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "category"),
      where("email", "==", auth?.currentUser?.email)
    );
    const unSub = onSnapshot(q, (querySnapshot) => {
      setCategories(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <TouchableOpacity className="px-6" onPress={() => navigator.openDrawer()}>
        <Bars3BottomLeftIcon color="black" size={35} />
      </TouchableOpacity>
      <View className="flex-row justify-around mt-2 items-center px-2">
        <View className="p-6">
          <Text className="text-4xl font-bold">Customize</Text>
          <Text>Customize your categories!</Text>
        </View>
        <Image
          source={require("../assets/person-outline.png")}
          style={{ height: 80, width: 80, resizeMode: "contain" }}
        />
      </View>
      <View className="flex-col space-y-5">
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            height: "70%",
          }}
        >
          {categories.map((category) => (
            <TaskCard key={category.id} category={category} disable={true} />
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="add-circle-outline" type="ionicon" size={60} />
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <SafeAreaView
            behavior="padding"
            className="bg-slate-400 flex-1 mt-72"
          >
            <View className="mt-3 flex-row justify-end">
              <TouchableOpacity
                className="right-3"
                onPress={() => setModalVisible(false)}
              >
                <XCircleIcon color="black" size={40} />
              </TouchableOpacity>
            </View>
            <View className="flex-column flex-1 items-center justify-start pt-2 space-y-5">
              <TextInput
                placeholder="Category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg block w-64 p-2"
                //   value={newTask}
                //   onChangeText={(text) => setNewTask(text)}
              />
              <TouchableOpacity
                //   onPress={handleNewTask}
                className="p-4 bg-gray-500 rounded-xl w-36 flex-row space-x-2 justify-center items-center"
              >
                <Text className="font-bold">Add Category</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
