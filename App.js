import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { VideoGalleryStack } from "./StackNavigator";
import SplashScreen from "./components/SplashScreen";

const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export default function App() {
  const [isLoad, setIsLoad] = React.useState(false);

  setTimeout(() => {
    setIsLoad(true);
  }, 5000);

  return isLoad ? (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeMain"
          drawerContent={() => <DrawerNavigator />}
        >
          <Drawer.Screen
            name="HomeMain"
            component={TabNavigator}
            options={navOptionHandler}
          />
          <Drawer.Screen
            name="VideoGalleryMain"
            component={VideoGalleryStack}
            options={navOptionHandler}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    <NativeBaseProvider>
      <SplashScreen />
    </NativeBaseProvider>
  );
}
