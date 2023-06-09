import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

const ProductRangesScreen = () => {
  return (
    <>
      <Header headerTitle={"Product Ranges"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#e5e7ebd1",
        }}
      >
        <View style={{ width: "25%", borderColor: "red", borderWidth: 5 }}>
          <Text>asd</Text>
        </View>
        <View style={{ width: "25%", borderColor: "red", borderWidth: 5 }}>
          <Text>asd</Text>
        </View>
        <View style={{ width: "25%", borderColor: "red", borderWidth: 5 }}>
          <Text>asd</Text>
        </View>
        <View style={{ width: "25%", borderColor: "red", borderWidth: 5 }}>
          <Text>asd</Text>
        </View>
      </View>
    </>
  );
};

export default ProductRangesScreen;
