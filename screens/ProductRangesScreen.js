import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Image } from "native-base";
import { useNavigation } from "@react-navigation/native";

const ProductRangesScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header headerTitle={"Product Ranges"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#e5e7ebd1",
          padding: 10,
        }}
      >
        {/* PP-R PIPING SYSTEM */}

        <View style={{ flex: 0.5, margin: 5 }}>
          <Pressable onPress={() => navigation.navigate("PPR")}>
            <Image
              alt="menu-img"
              borderRadius={15}
              height={"100%"}
              source={{
                uri: "https://www.raktherm.com/Mobileapp/Images/Images/PPRCover.jpg",
              }}
              width={Dimensions.get("window").width - 20}
            />
            <View
              borderRadius={15}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000085",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "bold",
                }}
              >
                PP-R PIPING SYSTEM
              </Text>
            </View>
          </Pressable>
        </View>
        {/* -------------------- */}
        {/* UPVC PIPING SYSTEM */}
        <View style={{ flex: 0.5, margin: 5 }}>
          <Pressable onPress={() => navigation.navigate("UPVC")}>
            <Image
              alt="menu-img"
              borderRadius={15}
              height={"100%"}
              source={{
                uri: "https://www.raktherm.com/Mobileapp/Images/Images/UPVCCover.jpg",
              }}
              width={Dimensions.get("window").width - 20}
            />
            <View
              borderRadius={15}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000085",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "bold",
                }}
              >
                UPVC PIPING SYSTEM
              </Text>
            </View>
          </Pressable>
        </View>
        {/* -------------------- */}
        {/* PEX PIPING SYSTEM */}
        <View style={{ flex: 0.5, margin: 5 }}>
          <Pressable onPress={() => navigation.navigate("PEX")}>
            <Image
              alt="menu-img"
              borderRadius={15}
              height={"100%"}
              source={{
                uri: "https://www.raktherm.com/Mobileapp/Images/Images/PEXCover.jpg",
              }}
              width={Dimensions.get("window").width - 20}
            />
            <View
              borderRadius={15}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000085",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "bold",
                }}
              >
                PEX PIPING SYSTEM
              </Text>
            </View>
          </Pressable>
        </View>
        {/* -------------------- */}
        {/* SEALANT SOLUTIONS */}
        <View style={{ flex: 0.5, margin: 5 }}>
          <Pressable onPress={() => navigation.navigate("SEALANT")}>
            <Image
              alt="menu-img"
              borderRadius={15}
              height={"100%"}
              source={{
                uri: "https://www.raktherm.com/Mobileapp/Images/Images/sealantCover.jpg",
              }}
              width={Dimensions.get("window").width - 20}
            />
            <View
              borderRadius={15}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000085",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "bold",
                }}
              >
                SEALANT SOLUTIONS
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ProductRangesScreen;
