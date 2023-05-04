import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { auth } from "../firebaseConfig";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  //   const user = auth?.currentUser?.email;
  const user = "";
  return (
    <>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Task"
              component={TaskScreen}
              options={{ headerShown: false }}
              initialParams={{ category: "Error", numTasks: "0" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </>
  );
}
