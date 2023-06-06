import { View, Text, Dimensions } from "react-native";
import React from "react";
import { CertificateData } from "../assets/data/Certificates";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Certification = () => {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <>
      <View
        backgroundColor={"white"}
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          <Text
            style={{ fontSize: 17, fontWeight: "300", textAlign: "justify" }}
          >
            RAKtherm has passed the quality assurance and quality perfomance
            tests to ensure that our products are suitable for global
            distribution and utilization.
          </Text>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: 10,
            marginBottom: 40,
            backgroundColor: "#f6f8fa",
            marginTop: 20,
          }}
        >
          {CertificateData.map((data, key) => (
            <View
              style={{
                width: "30%",
                margin: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "black",
                shadowOpacity: 0.5,
                shadowRadius: 2,
                shadowOffset: {
                  height: 1,
                  width: 1,
                },
              }}
              key={key}
            >
              <Image
                source={data.src}
                style={{
                  height: 120,
                  width: 120,
                  backgroundColor: "white",
                  borderRadius: 100,
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Certification;
