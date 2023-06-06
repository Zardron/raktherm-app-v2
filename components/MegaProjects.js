import React, { useState } from "react";
import {
  View,
  Text,
  Box,
  Stack,
  Modal,
  Button,
  Image,
  HStack,
  Spinner,
  Heading,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { MegaProjectData } from "../assets/data/MegaProjects";
import { Dimensions, Pressable } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

const MegaProjects = () => {
  const deviceWidth = Dimensions.get("window").width;
  const lastPost = MegaProjectData[MegaProjectData.length - 1].id;

  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState(0);
  const [isLoad, setIsLoad] = React.useState(true);

  const openModal = (project_id) => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3000);

    setProjectId(project_id);
    setOpen(true);
  };

  const closeModal = () => {
    setIsLoad(true);
    setProjectId(0);
    setOpen(false);
  };

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
          borderBottomWidth: 0.2,
          borderBottomColor: "gray",
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
            It's an accomplishment to be part of these major construction
            projects, to see how RAKtherm business pushes the technical
            boundaries in piping technology to meet the rising global demand.
          </Text>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          {/* POST */}
          {MegaProjectData.map((data, key) => (
            <View
              style={{
                marginTop: 10,
                marginBottom: data.id === lastPost ? 20 : 0,
                paddingHorizontal: 20,
              }}
            >
              <Box alignItems="center" style={{ width: deviceWidth - 30 }}>
                <Box
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                >
                  <Pressable onPress={() => openModal(data.id)}>
                    <Stack
                      p="4"
                      space={3}
                      style={{ width: deviceWidth - 30 }}
                      backgroundColor={"white"}
                    >
                      <Stack space={2}>
                        <Text>{data.title}</Text>
                      </Stack>
                    </Stack>
                  </Pressable>
                </Box>
              </Box>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content
          maxWidth={deviceWidth - 30}
          width={deviceWidth}
          placement="center"
          backgroundColor={"white"}
        >
          {MegaProjectData.filter((data) => data.id === projectId).map(
            (item, key) => (
              <>
                <Modal.Header
                  style={{ backgroundColor: "#0e9648", color: "#f9fafb" }}
                >
                  <Text
                    style={{
                      backgroundColor: "#0e9648",
                      color: "#f9fafb",
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Text>
                </Modal.Header>

                <Modal.Body key={key}>
                  {isLoad ? (
                    <HStack space={2} justifyContent="center">
                      <Spinner
                        accessibilityLabel="Loading posts"
                        color="#0e9648"
                      />
                      <Heading color="#0e9648" fontSize="md">
                        Loading... Please wait!
                      </Heading>
                    </HStack>
                  ) : (
                    <AutoHeightImage
                      source={{ uri: item.src }}
                      alt="img"
                      width={deviceWidth - 60}
                    />
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      size="sm"
                      variant="subtle"
                      colorScheme="danger"
                      onPress={closeModal}
                    >
                      Close
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </>
            )
          )}
        </Modal.Content>
      </Modal>
    </>
  );
};

export default MegaProjects;
