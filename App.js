import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "./screens/Registration.js";
import Login from "./screens/Login.js";
import Home from "./screens/Home.js";

const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Register">
        <MainStack.Screen name="Registration" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home screen",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "green",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                color="black"
              />
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
