import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TaskCard from "../components/TaskCard";
import { Bars3BottomLeftIcon } from "react-native-heroicons/outline";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

const HomeScreen = () => {
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

  const totalTasks = categories.reduce(
    (accumulator, category) => accumulator + category.data.tasks.length,
    0
  );

  return (
    <SafeAreaView>
      <TouchableOpacity className="px-6" onPress={() => navigator.openDrawer()}>
        <Bars3BottomLeftIcon color="black" size={35} />
      </TouchableOpacity>
      <View className="flex-row justify-around mt-2 items-center px-2">
        <View className="p-6">
          <Text className="text-4xl font-bold">Hello</Text>
          <Text>You have {totalTasks} tasks total </Text>
        </View>
        <Image
          source={require("../assets/person-outline.png")}
          style={{ height: 80, width: 80, resizeMode: "contain" }}
        />
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {categories.map((category) => (
          <TaskCard key={category.id} category={category} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
