import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createStackNavigator();

const MenuScreen = () => {
  const navOptionHandler = () => ({
    headerShown: false,
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={navOptionHandler}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={navOptionHandler}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MenuScreen;
