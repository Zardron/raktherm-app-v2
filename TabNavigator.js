import {
  BlogStack,
  HomeStack,
  ProductRangesStack,
  ServicesAndSupportStack,
  VideoGalleryStack,
} from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "native-base";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const deviceWidth = Dimensions.get("window").width;

  const config = (focused) => [
    {
      color: focused ? "#0e9648" : "#414142",
      position: focused ? "absolute" : "relative",
      top: focused ? -20 : 0,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 24,
          elevation: 0,
          backgroundColor: "#fff",
          paddingTop: 17,
          height: 70,
          width: deviceWidth,
          borderTopWidth: 0.2,
          borderTopColor: "#0e9648",
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Blogs"
        component={BlogStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = (
                <View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome5
                      name="blogger-b"
                      size={24}
                      style={config(focused)}
                    />
                  </View>
                </View>
              );
            }

            return icon;
          },
        }}
      />
      <Tab.Screen
        name="VideoGallery"
        component={VideoGalleryStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            {
              icon = (
                <View>
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
                      style={config(focused)}
                    />
                  </View>
                </View>
              );
            }

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
              icon = (
                <View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome5
                      name="home"
                      size={24}
                      style={config(focused)}
                    />
                  </View>
                </View>
              );
            }

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
              icon = (
                <View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome5
                      name="clipboard-list"
                      size={24}
                      style={config(focused)}
                    />
                  </View>
                </View>
              );
            }

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
              icon = (
                <View>
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
                      style={config(focused)}
                    />
                  </View>
                </View>
              );
            }

            return icon;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
