import React from "react";
import { Image, View } from "native-base";
import Header from "../components/Header";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { LogBox } from "react-native";
import Newsfeed from "../components/Newsfeed";
import MegaProjects from "../components/MegaProjects";
import { useWindowDimensions } from "react-native";
import Certification from "../components/Certification";

LogBox.ignoreLogs([
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
]);

LogBox.ignoreLogs([
  "Found screens with the same name nested inside one another.",
]);

const MegaProjectRoute = () => <MegaProjects />;

const NewsfeedRoute = () => <Newsfeed />;

const CertificationRoute = () => <Certification />;

const renderScene = SceneMap({
  first: MegaProjectRoute,
  second: NewsfeedRoute,
  third: CertificationRoute,
});

const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: "first", title: "mega projects" },
    { key: "second", title: "Newsfeed" },
    { key: "third", title: "certifications" },
  ]);

  return (
    <>
      <Header headerTitle={"Home"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#f6f8fa",
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#404041",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../assets/logo_agt.png")}
            style={{
              width: "60%",
              height: 100,
              marginTop: 10,
            }}
            alt="banner"
          />
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "#0e9648" }}
              style={{ backgroundColor: "white" }}
              activeColor="#0e9648"
              inactiveColor="#414142"
              labelStyle={{
                fontSize: 12,
                fontWeight: "bold",
              }}
            />
          )}
        />
      </View>
    </>
  );
};

export default HomeScreen;
