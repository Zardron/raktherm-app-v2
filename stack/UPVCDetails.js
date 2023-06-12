import React, { useState } from "react";
import Header from "../components/Header";
import { SafeAreaView, View, Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

const UPVCDetails = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "#e5e7ebd1",
        }}
      >
        <Header
          headerTitle={"UPVC PIPING SYSTEM"}
          size={16}
          mainScreen={false}
        />

        <SafeAreaView style={styles.container}>
          <View style={{ borderBottomColor: "#0e9648", borderBottomWidth: 5 }}>
            <AutoHeightImage
              alt="menu-img"
              source={{
                uri: "https://www.raktherm.com/Mobileapp/Images/Images/UPVCCover.jpg",
              }}
              width={Dimensions.get("window").width}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default UPVCDetails;
