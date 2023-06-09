import { View, Text, Dimensions } from "react-native";
import React from "react";
import Header from "../components/Header";
import AutoHeightImage from "react-native-auto-height-image";
import { Box, Center, Pressable, ScrollView, Stack } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { BlogData } from "../assets/data/Blogs";
import { useNavigation } from "@react-navigation/native";

const BlogScreen = () => {
  const deviceWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  return (
    <>
      <Header headerTitle={"Blogs"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#e5e7ebd1",
        }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            {BlogData.map((data, key) => (
              <Box alignItems="center" margin={2} key={key}>
                <Box
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                >
                  <Box>
                    <Pressable
                      onPress={() =>
                        navigation.navigate({
                          name: "BlogDetail",
                          params: { _id: data.id },
                        })
                      }
                    >
                      <AutoHeightImage
                        source={data.imgSrc}
                        alt="img"
                        width={deviceWidth - 30}
                      />
                      <Center
                        bg="#008053"
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
                        <Pressable
                          onPress={() =>
                            navigation.navigate({
                              name: "BlogDetail",
                              params: { _id: data.id },
                            })
                          }
                        >
                          <Entypo name="eye" size={20} color="white" />
                        </Pressable>
                      </Center>
                    </Pressable>
                  </Box>
                  <Stack
                    p="4"
                    space={3}
                    backgroundColor={"white"}
                    width={deviceWidth - 30}
                  >
                    <Stack space={2}>
                      <Text style={{ fontWeight: "500" }}>{data.title}</Text>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default BlogScreen;
