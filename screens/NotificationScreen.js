import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header headerTitle={"Notification"} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Home"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate("Home");
          }}
        />
      </View>
    </>
  );
};

export default NotificationScreen;
