import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import {
  ArrowLongLeftIcon,
  EllipsisVerticalIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Todo from "../components/Todo";
import { Icon } from "@rneui/themed";
import { set } from "react-native-reanimated";

const TaskScreen = ({ route }) => {
  const navigator = useNavigation();
  const { category, tasks } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="h-full">
      <View className="flex-row justify-between px-6">
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Home");
          }}
        >
          <ArrowLongLeftIcon size={45} color="black" />
        </TouchableOpacity>

        <EllipsisVerticalIcon color="black" size={45} />
      </View>
      <View className="items-center">
        <Text className="text-gray-600 text-lg">{tasks.length} Tasks</Text>
        <Text className="font-bold text-3xl">{category}</Text>
      </View>
      <View className="flex-1">
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Todo
              todo={item.todo}
              isCompleted={item.isCompleted}
              keyExtractor={(item) => item.id}
            />
          )}
        />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <SafeAreaView className="bg-slate-400 relative flex-1 mt-44">
          <View className="mt-10">
            <View className="flex-row justify-center align-center">
              <Text className="text-3xl">Add Task</Text>
            </View>
            <TouchableOpacity className="absolute right-10">
              <XCircleIcon
                color="black"
                size={40}
                onPress={() => setModalVisible(false)}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="add-circle-outline" type="ionicon" size={60} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskScreen;
