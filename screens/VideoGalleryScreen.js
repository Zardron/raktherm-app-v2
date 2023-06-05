import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

const VideoGalleryScreen = () => {
  return (
    <>
      <Header headerTitle={"Video Gallery"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e5e7ebd1",
          borderBottomWidth: 50,
          borderColor: "#0e9648",
        }}
      >
        <Text>Video Gallery Screen!</Text>
      </View>
    </>
  );
};

export default VideoGalleryScreen;
