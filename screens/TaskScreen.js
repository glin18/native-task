import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
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
  const [newTask, setNewTask] = useState("");

  const handleNewTask = () => {
    setNewTask("");
    console.log(newTask);
  };

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
        <SafeAreaView behavior="padding" className="bg-slate-400 flex-1 mt-72">
          <View className="mt-3 flex-row justify-end">
            {/* <View className="flex-row justify-center align-center">
              <Text className="text-3xl">Add Task</Text>
            </View> */}
            <TouchableOpacity
              className="right-3"
              onPress={() => setModalVisible(false)}
            >
              <XCircleIcon color="black" size={40} />
            </TouchableOpacity>
          </View>
          <View className="flex-column flex-1 items-center justify-start pt-2 space-y-5">
            <TextInput
              placeholder="Task"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg block w-64 p-2"
              value={newTask}
              onChangeText={(text) => setNewTask(text)}
            />
            <TouchableOpacity
              onPress={handleNewTask}
              className="p-4 bg-gray-500 rounded-xl w-36 flex-row space-x-2 justify-center items-center"
            >
              <Text className="font-bold">Add Task</Text>
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
