import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Box, AspectRatio, Center, ScrollView } from "native-base";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./components/Header";
import SubMenuHeader from "./components/SubMenuHeader";

const DrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <>
      <SubMenuHeader headerTitle={"Side Menu"} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#e5e7ebd1",
          borderBottomWidth: 50,
          borderColor: "#0e9648",
        }}
      >
        <Box alignItems="center">
          <Box
            maxW="80"
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
              backgroundColor: "e5e7ebd1",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={1}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="#0e9648"
                _dark={{
                  bg: "#0e9648",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "sm",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                Zardron Angelo Pesquera
              </Center>
            </Box>
          </Box>
        </Box>
        <ScrollView>
          <View style={{ flex: 1 }}>
            {/* TOP MENU */}
            <View
              style={{
                flex: 2,
                justifyContent: "flex-start",
                marginHorizontal: 5,
                marginTop: 5,
              }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    backgroundColor: "#e2e8f0",
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <FontAwesome5 name="home" size={24} color="#0e9648" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#0e9648",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("Home")}
                    >
                      Home
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MaterialIcons
                      name="video-library"
                      size={24}
                      color="#404041"
                    />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("VideoGallery")}
                    >
                      Video Gallery
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="clipboard-list"
                      size={24}
                      color="black"
                    />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("ProductRanges")}
                    >
                      Product Ranges
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MaterialIcons
                      name="contact-support"
                      size={24}
                      color="#404041"
                    />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("ServicesAndSupport")}
                    >
                      Services & Support
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="file-certificate"
                      size={24}
                      color="#404041"
                    />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("Certifications")}
                    >
                      Certifications
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MaterialIcons name="menu-book" size={24} color="#404041" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("Catalogues")}
                    >
                      Catalogues
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* END */}
            {/* BOTTOM MENU */}
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginHorizontal: 5,
                borderTopWidth: 1,
                borderTopColor: "#41404040",
              }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <FontAwesome5 name="user-tie" size={24} color="#404041" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("Notification")}
                    >
                      My Profile
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Ionicons
                      name="ios-settings-sharp"
                      size={24}
                      color="#404041"
                    />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => navigation.navigate("Notification")}
                    >
                      Settings
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flex: 0.2,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MaterialIcons name="logout" size={24} color="red" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "red",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                    >
                      Logout
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DrawerNavigator;
