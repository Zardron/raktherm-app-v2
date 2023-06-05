import { Box, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import { Feather } from "@expo/vector-icons";

const Header = ({ headerTitle, mainScreen }) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="dark-content" />
      <Box safeAreaTop bg="transparent" />
      <View
        style={{
          flexDirection: "row",
          height: 50,
          backgroundColor: "#0e9648",
        }}
      >
        {mainScreen ? (
          <View
            style={{
              flex: 1,

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Feather name="menu" size={28} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flex: 1,

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,

                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 10,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={28} color="white" />
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            flex: 1.5,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 21, fontWeight: "bold", color: "white" }}>
            {headerTitle}
          </Text>
        </View>
        <View
          style={{
            flex: 1,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <Feather name="bell" size={24} color="white" />
        </View>
      </View>
    </>
  );
};

export default Header;
