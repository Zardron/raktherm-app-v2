import React from "react";
import { Button, View, Text } from "native-base";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header
        headerTitle={"Settings"}
        mainScreen={true}
        navigation={navigation}
        route={"Settings"}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings Screen!</Text>
        <Button onPress={() => navigation.navigate("UpdateProfile")}>
          Update Profile
        </Button>
      </View>
    </>
  );
};

export default SettingsScreen;
