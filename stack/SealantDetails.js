import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const SealantDetails = () => {
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
          headerTitle={"SEALANT SOLUTIONS"}
          size={16}
          mainScreen={false}
        />

        <SafeAreaView style={styles.container}>
          <View style={{ borderBottomColor: "#0e9648", borderBottomWidth: 5 }}>
            <AutoHeightImage
              alt="menu-img"
              source={{
                uri: "https://www.raktherm.com/Mobileapp/Images/Images/PPRCover.jpg",
              }}
              width={Dimensions.get("window").width}
            />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}
          >
            <View style={{ paddingTop: 10 }}>
              <Accordion
                align="bottom"
                sections={sections}
                activeSections={activeSections}
                renderHeader={renderHeader}
                renderContent={renderContent}
                onChange={(sections) => setActiveSections(sections)}
                sectionContainerStyle={styles.accordContainer}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default SealantDetails;
