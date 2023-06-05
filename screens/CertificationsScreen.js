import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

const CertificationsScreen = () => {
  return (
    <>
      <Header headerTitle={"Certifications"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e5e7ebd1",
          borderBottomWidth: 50,
          borderColor: "#0e9648",
        }}
      >
        <Text>Certification Screen!</Text>
      </View>
    </>
  );
};

export default CertificationsScreen;
