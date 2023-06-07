import * as React from "react";
import { NativeBaseProvider } from "native-base";
import MenuScreen from "./screens/MenuScreen";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [isLoad, setIsLoad] = React.useState(false);

  setTimeout(() => {
    setIsLoad(true);
  }, 5000);

  return isLoad ? (
    <NativeBaseProvider>
      <MenuScreen />
    </NativeBaseProvider>
  ) : (
    <NativeBaseProvider>
      <SplashScreen />
    </NativeBaseProvider>
  );
}
