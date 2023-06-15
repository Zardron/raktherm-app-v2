import React from "react";
import Header from "../components/Header";
import { View, Text, Box, Stack, ScrollView, Pressable } from "native-base";
import { Dimensions, Platform } from "react-native";
import { FITTINGS_DATA } from "../assets/data/ProductRanges/PPRSection";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const PPRDetails = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Header
          headerTitle={"PP-R PIPING SYSTEM"}
          size={16}
          mainScreen={false}
        />

        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
              padding: 10,
              marginTop: 5,
            }}
          >
            {FITTINGS_DATA.map((data, key) => (
              <View style={{ width: "48%" }} key={key}>
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
                          name: "Details",
                          params: { _id: data.id },
                        })
                      }
                    >
                      <Image
                        source={{
                          uri: data.imgSrc,
                        }}
                        width={Dimensions.get("window").width / 2}
                        height={Platform.OS === "ios" ? 180 : 150}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                      />
                    </Pressable>
                  </Box>

                  <Stack p="4" space={3} backgroundColor={"#0e9648"}>
                    <Stack space={2}>
                      <Text numberOfLines={1} color={"white"}>
                        {data.title}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PPRDetails;
