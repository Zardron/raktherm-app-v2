import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import YoutubeIframe from "react-native-youtube-iframe";
import { View, Text, Box, HStack, Stack, ScrollView } from "native-base";
import { Dimensions, AppState } from "react-native";
import { VideoData } from "../assets/data/VideoData";

const VideoGalleryScreen = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState:", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const deviceWidth = Dimensions.get("window").width;
  const lastVideo = VideoData[VideoData.length - 1].id;

  return (
    <>
      <Header headerTitle={"Video Gallery"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#f6f8fa",
        }}
      >
        <ScrollView>
          {VideoData.map((data, key) => (
            <View
              style={{
                marginTop: 10,
                marginBottom: data.id === lastVideo ? 20 : 5,
                paddingHorizontal: 20,
              }}
              key={key}
            >
              <Box alignItems="center" shadow={3}>
                <Box
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _web={{
                    shadow: 2,
                    borderWidth: 0,
                  }}
                  _light={{
                    backgroundColor: "gray.50",
                  }}
                >
                  <Box>
                    <YoutubeIframe
                      height={220}
                      width={deviceWidth - 32}
                      videoId={data.videoId}
                      play={
                        appState.current === "inactive"
                          ? false
                          : appState.current === "background"
                          ? false
                          : ""
                      }
                    />
                  </Box>
                  <Stack p="4" space={3}>
                    <HStack
                      alignItems="center"
                      space={4}
                      justifyContent="space-between"
                    >
                      <HStack alignItems="center">
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                          fontWeight="700"
                        >
                          {data.title}
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default VideoGalleryScreen;
