import { View, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Box,
  AspectRatio,
  Center,
  ScrollView,
  Pressable,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SubMenuHeader from "./components/SubMenuHeader";
import HomeScreen from "./screens/HomeScreen";

const DrawerNavigator = ({ isLoggedIn, isGuestLogin, handleLogout }) => {
  const navigation = useNavigation();

  const handleNavigate = (route) => {
    let routeName = route;
    navigation.navigate(routeName);
  };

  return (
    <>
      <SubMenuHeader headerTitle={"Side Menu"} />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
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
              backgroundColor: "#e5e7ebd1",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={1}>
                <Image
                  source={{
                    uri: isGuestLogin
                      ? "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"
                      : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
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
                {isGuestLogin
                  ? "Signed In as Guest"
                  : "Zardron Angelo Pesquera"}
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
              <Pressable>
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
                    <FontAwesome5 name="home" size={24} color="#414142" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#414142",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => handleNavigate("Home")}
                    >
                      Home
                    </Text>
                  </View>
                </View>
              </Pressable>

              <Pressable>
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
                    <FontAwesome5 name="blogger-b" size={24} color="#404041" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        color: "#404041",
                        fontSize: 18,
                        fontWeight: "700",
                      }}
                      onPress={() => handleNavigate("Blogs")}
                    >
                      Blogs
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable>
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
                      onPress={() => handleNavigate("VideoGallery")}
                    >
                      Video Gallery
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable>
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
                      onPress={() => handleNavigate("ProductRanges")}
                    >
                      Product Ranges
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable>
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
                      onPress={() => handleNavigate("ServicesAndSupport")}
                    >
                      Services & Support
                    </Text>
                  </View>
                </View>
              </Pressable>
              {isGuestLogin ? (
                ""
              ) : (
                <Pressable>
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
                        name="menu-book"
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
                        onPress={() => handleNavigate("Catalogues")}
                      >
                        Catalogues
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
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
              <Pressable>
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
                      onPress={() => handleNavigate("Notification")}
                    >
                      My Profile
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable>
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
                      onPress={() => handleNavigate("Settings")}
                    >
                      Settings
                    </Text>
                  </View>
                </View>
              </Pressable>
              {isGuestLogin ? (
                <Pressable onPress={handleLogout}>
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
                      <MaterialIcons name="logout" size={24} color="blue" />
                    </View>
                    <View style={{ flex: 0.8 }}>
                      <Text
                        style={{
                          color: "blue",
                          fontSize: 18,
                          fontWeight: "700",
                        }}
                      >
                        Back to Sign In
                      </Text>
                    </View>
                  </View>
                </Pressable>
              ) : (
                <Pressable onPress={handleLogout}>
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
                </Pressable>
              )}
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{ display: "none" }}>
        <HomeScreen props={"bogo"} />
      </View>
    </>
  );
};

export default DrawerNavigator;
