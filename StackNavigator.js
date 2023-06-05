import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import VideoGalleryScreen from "./screens/VideoGalleryScreen";
import MegaProjects from "./components/MegaProjects";
import ProductRangesScreen from "./screens/ProductRangesScreen";
import ServicesAndSupportScreen from "./screens/ServicesAndSupportScreen";
import CertificationsScreen from "./screens/CertificationsScreen";
import FeedDetails from "./stack/FeedDetails";

const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="MegaProjects"
        component={MegaProjects}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="FeedDetails"
        component={FeedDetails}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

export const VideoGalleryStack = () => {
  return (
    <Stack.Navigator initialRouteName="VideoGallery">
      <Stack.Screen
        name="VideoGallery"
        component={VideoGalleryScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

export const ProductRangesStack = () => {
  return (
    <Stack.Navigator initialRouteName="ProductRanges">
      <Stack.Screen
        name="ProductRanges"
        component={ProductRangesScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

export const ServicesAndSupportStack = () => {
  return (
    <Stack.Navigator initialRouteName="ServicesAndSupport">
      <Stack.Screen
        name="ServicesAndSupport"
        component={ServicesAndSupportScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

export const CertificationsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Certifications">
      <Stack.Screen
        name="Certifications"
        component={CertificationsScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};
