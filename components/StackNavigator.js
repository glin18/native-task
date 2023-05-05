import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TaskScreen from "../screens/TaskScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { auth } from "../firebaseConfig";
import { useAuth } from "../hooks/useAuth";
import AppScreen from "../screens/AppScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { currentUser } = useAuth();

  return (
    <>
      <Stack.Navigator>
        {currentUser ? (
          <>
            {/* <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Task"
              component={TaskScreen}
              options={{ headerShown: false }}
              initialParams={{ category: "Error", numTasks: "0" }}
            /> */}
            <Stack.Screen
              name="App"
              component={AppScreen}
              options={{ headerShown: false }}
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
