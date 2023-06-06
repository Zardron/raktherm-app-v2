import { View, Dimensions, StyleSheet, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AutoHeightImage from "react-native-auto-height-image";
import { HStack, Heading } from "native-base";
import Animated from "react-native-reanimated";

const SplashScreen = () => {
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);

  const loaderValue = useRef(new Animated.Value(0)).current;
  const load = (count) => {
    Animated.timing(loaderValue, {
      toValue: count, //final value
      duration: 1, //update value in 500 milliseconds
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    countInterval.current = setInterval(() => setCount((old) => old + 2), 50);
    return () => {
      clearInterval(countInterval); //when user exits, clear this interval.
    };
  }, []);

  useEffect(() => {
    load(count);
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval);
    }
  }, [count]);

  const deviceWidth = Dimensions.get("window").width;

  return (
    <>
      <View
        style={{
          flex: 0.6,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <AutoHeightImage
          source={require("../assets/logo_agt.png")}
          width={deviceWidth - 28}
        />
      </View>
      <View
        style={{
          flex: 0.4,
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingHorizontal: 50,
        }}
      >
        <Text style={{ marginBottom: 5, fontSize: 16 }}>
          Loading {count}%... Please wait!
        </Text>
        <View style={styles.progressBar}>
          <Animated.View
            style={
              ([StyleSheet.absoluteFill],
              { backgroundColor: "#0e9648", width: `${count}%` })
            }
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#f9fafb",
    borderColor: "#414142",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default SplashScreen;
