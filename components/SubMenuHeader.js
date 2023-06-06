import { Box, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import { Feather } from "@expo/vector-icons";

const SubMenuHeader = ({ headerTitle }) => {
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
        <View
          style={{
            flex: 1.5,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 21, fontWeight: "bold", color: "#f9fafb" }}>
            {headerTitle}
          </Text>
        </View>
      </View>
    </>
  );
};

export default SubMenuHeader;
