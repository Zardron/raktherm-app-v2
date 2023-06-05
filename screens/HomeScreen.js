import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  View,
  Text,
  Box,
  HStack,
  Center,
  Stack,
  Progress,
} from "native-base";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NewsfeedData } from "../assets/data/Newsfeed";
import { Dimensions, useWindowDimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { LogBox } from "react-native";
import Newsfeed from "../components/Newsfeed";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

LogBox.ignoreLogs([
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
]);

LogBox.ignoreLogs([
  "Found screens with the same name nested inside one another.",
]);

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const NewsfeedRoute = () => <Newsfeed />;

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: NewsfeedRoute,
  third: ThirdRoute,
});

const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: "first", title: "mega projects" },
    { key: "second", title: "Newsfeed" },
    { key: "third", title: "certifications" },
  ]);

  return (
    <>
      <Header headerTitle={"Home"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#f6f8fa",
          borderBottomWidth: 50,
          borderColor: "#0e9648",
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#404041",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../assets/logo_agt.png")}
            style={{
              width: "60%",
              height: 100,
              marginTop: 10,
            }}
            alt="banner"
          />
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "#0e9648" }}
              style={{ backgroundColor: "white" }}
              activeColor="#0e9648"
              inactiveColor="#414142"
              labelStyle={{
                fontSize: 12,
                fontWeight: 500,
              }}
            />
          )}
        />
      </View>
    </>
  );
};

export default HomeScreen;
