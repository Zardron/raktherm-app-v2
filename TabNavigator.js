import {
  CertificationsStack,
  HomeStack,
  ProductRangesStack,
  ServicesAndSupportStack,
  VideoGalleryStack,
} from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image } from "native-base";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          elevation: 0,
          backgroundColor: "#fff",
          paddingTop: 17,
          height: 70,
          width: deviceWidth,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="VideoGallery"
        component={VideoGalleryStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = focused ? (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="video-library"
                    size={24}
                    color="#0e9648"
                  />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="video-library"
                    size={24}
                    color="#404041"
                  />
                </View>
              );
            }

            // You can return any component that you like here!
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="ProductRanges"
        component={ProductRangesStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = focused ? (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="clipboard-list"
                    size={24}
                    color="#0e9648"
                  />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="clipboard-list"
                    size={24}
                    color="#404041"
                  />
                </View>
              );
            }

            // You can return any component that you like here!
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = focused ? (
                <>
                  <View
                    style={{
                      position: "absolute",
                      top: -35,
                      backgroundColor: "#0e9648",
                      padding: 15,
                      borderRadius: 15,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesome5 name="home" size={25} color="white" />
                    </View>
                  </View>
                </>
              ) : (
                <View
                  style={{
                    position: "absolute",
                    top: -35,
                    backgroundColor: "#404041",
                    padding: 15,
                    borderRadius: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome5 name="home" size={25} color="white" />
                  </View>
                </View>
              );
            }

            // You can return any component that you like here!
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="ServicesAndSupport"
        component={ServicesAndSupportStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = focused ? (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="contact-support"
                    size={24}
                    color="#0e9648"
                  />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="contact-support"
                    size={24}
                    color="#404041"
                  />
                </View>
              );
            }

            // You can return any component that you like here!
            return icon;
          },
        }}
      />
      <Tab.Screen
        name="Certifications"
        component={CertificationsStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = focused ? (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="file-certificate"
                    size={24}
                    color="#0e9648"
                  />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="file-certificate"
                    size={24}
                    color="#404041"
                  />
                </View>
              );
            }

            // You can return any component that you like here!
            return icon;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
