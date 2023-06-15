import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import VideoGalleryScreen from "./screens/VideoGalleryScreen";
import ProductRangesScreen from "./screens/ProductRangesScreen";
import ServicesAndSupportScreen from "./screens/ServicesAndSupportScreen";
import FeedDetails from "./stack/FeedDetails";
import BlogScreen from "./screens/BlogScreen";
import BlogDetail from "./stack/BlogDetail";
import PPRDetails from "./stack/PPRDetails";
import UPVCDetails from "./stack/UPVCDetails";
import PEXDetails from "./stack/PEXDetails";
import SealantDetails from "./stack/SealantDetails";
import Details from "./stack/Details";

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
      <Stack.Screen
        name="PPR"
        component={PPRDetails}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="UPVC"
        component={UPVCDetails}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="PEX"
        component={PEXDetails}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="SEALANT"
        component={SealantDetails}
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

export const BlogStack = () => {
  return (
    <Stack.Navigator initialRouteName="Blogs">
      <Stack.Screen
        name="Blogs"
        component={BlogScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};
