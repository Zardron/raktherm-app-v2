import React from "react";
import { View, Text, Box, HStack, Center, Stack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NewsfeedData } from "../assets/data/Newsfeed";
import AutoHeightImage from "react-native-auto-height-image";
import { Dimensions } from "react-native";

const Newsfeed = () => {
  const navigation = useNavigation();
  const deviceWidth = Dimensions.get("window").width;
  const lastPost = NewsfeedData[NewsfeedData.length - 1].id;

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        {/* POST */}
        {NewsfeedData.map((data, key) => (
          <View
            style={{
              marginTop: 10,
              marginBottom: data.id === lastPost ? 20 : 0,
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
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate({
                        name: "FeedDetails",
                        params: { _id: data.id },
                      })
                    }
                  >
                    <AutoHeightImage
                      key={key}
                      source={data.imgSrc}
                      alt="img"
                      width={deviceWidth - 28}
                    />
                  </TouchableOpacity>
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
                        fontWeight="400"
                      >
                        {data.datePosted}
                      </Text>
                    </HStack>
                  </HStack>
                  <Center
                    bg="#0e9648"
                    _dark={{
                      bg: "violet.400",
                    }}
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "700",
                      fontSize: "xs",
                    }}
                    position="absolute"
                    top="0"
                    right="0"
                    px="3"
                    py="1.5"
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate({
                          name: "FeedDetails",
                          params: { _id: data.id },
                        })
                      }
                    >
                      <SimpleLineIcons name="options" size={24} color="white" />
                    </TouchableOpacity>
                  </Center>

                  <Stack space={2}>{data.details}</Stack>
                </Stack>
              </Box>
            </Box>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Newsfeed;
