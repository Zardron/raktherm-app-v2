import { Badge, Box, Button, Text, VStack } from "native-base";
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
      <StatusBar bg="transparent" barStyle="dark-content" />
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
              <Feather name="menu" size={28} color="#f9fafb" />
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
              <Ionicons name="chevron-back" size={28} color="#f9fafb" />
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#f9fafb" }}
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
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#f9fafb" }}>
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
          <Box alignItems="center">
            <VStack mb={2}>
              <Badge // bg="red.400"
                colorScheme="danger"
                rounded="full"
                mb={-2}
                mr={-2}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 12,
                }}
              >
                2
              </Badge>
              <Feather name="bell" size={24} color="#f9fafb" />
            </VStack>
          </Box>
        </View>
      </View>
    </>
  );
};

export default Header;
