import React, { useState } from "react";
import Header from "../components/Header";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  UIManager,
  LayoutAnimation,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Accordion from "react-native-collapsible/Accordion";
import AutoHeightImage from "react-native-auto-height-image";
import { sections } from "../assets/data/ProductRanges/PPRSection";

const PPRDetails = () => {
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  function toggleItem() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  const [activeSections, setActiveSections] = useState([]);

  function renderHeader(section, _, isActive) {
    return (
      <View style={styles.accordHeader}>
        <View style={{ width: "90%" }}>
          <Text style={styles.accordTitle}>{section.title}</Text>
        </View>
        <View
          style={{
            width: "10%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name={isActive ? "chevron-up" : "chevron-down"}
            size={20}
            color="#bbb"
          />
        </View>
      </View>
    );
  }

  function renderContent(section, _, isActive) {
    return <View style={styles.accordBody}>{section.content}</View>;
  }

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
          headerTitle={"PP-R PIPING SYSTEM"}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordContainer: {
    paddingBottom: 4,
    paddingHorizontal: 10,
  },
  accordHeader: {
    padding: 12,
    backgroundColor: "white",
    color: "#eee",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    borderTopColor: "#414142",
    borderTopWidth: 0.3,
    padding: 12,
    backgroundColor: "white",
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});

export default PPRDetails;
