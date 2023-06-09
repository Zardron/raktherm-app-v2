import { View, Text, Dimensions } from "react-native";
import React from "react";
import Header from "../components/Header";
import { BlogData } from "../assets/data/Blogs";
import { Box, HStack, ScrollView, Stack } from "native-base";
import AutoHeightImage from "react-native-auto-height-image";

const BlogDetail = ({ route }) => {
  const blogId = route.params?._id;
  const deviceWidth = Dimensions.get("window").width;
  const lastBlog = BlogData[BlogData.length - 1].id;

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "#e5e7ebd1",
        }}
      >
        <Header headerTitle={"Blog Detail"} mainScreen={false} />

        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0f2f5",
            }}
          >
            {/* POST */}
            {BlogData.filter((item) => item.id === blogId).map((data, key) => (
              <View
                style={{
                  marginTop: 10,
                  paddingHorizontal: 20,
                  marginBottom: 15,
                }}
                key={key}
              >
                <Box alignItems="center" backgroundColor={"red"}>
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                  >
                    <Box>
                      {/* <Pressable
                    onPress={() =>
                      navigation.navigate({
                        name: "FeedDetails",
                        params: { _id: data.id },
                      })
                    }
                  > */}
                      <AutoHeightImage
                        source={data.id === 5 ? data.imgSrc2 : data.imgSrc}
                        alt="img"
                        width={deviceWidth - 30}
                      />
                      {/* </Pressable> */}
                    </Box>
                    <Stack p="4" space={3} backgroundColor={"white"}>
                      <Stack space={2}>{data.details}</Stack>
                    </Stack>
                  </Box>
                </Box>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default BlogDetail;
