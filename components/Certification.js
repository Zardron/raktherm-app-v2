import React, { useState, useRef, createRef } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  HStack,
  Spinner,
  Heading,
  Pressable,
} from "native-base";
import { CertificateData } from "../assets/data/Certificates";
import { Image, Animated } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import {
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";

const Certification = () => {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  const [open, setOpen] = useState(false);
  const [certId, setCertId] = useState(0);
  const [isLoad, setIsLoad] = React.useState(true);

  const handleId = (id) => {
    setCertId(id);
    openModal();
  };

  const openModal = () => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
    setOpen(true);
  };

  const closeModal = () => {
    setIsLoad(true);
    setCertId(0);
    setOpen(false);
  };

  //
  const [panEnabled, setPanEnabled] = useState(false);

  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const pinchRef = createRef();
  const panRef = createRef();

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale },
      },
    ],
    { useNativeDriver: true }
  );

  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const handlePinchStateChange = ({ nativeEvent }) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale;
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();

        setPanEnabled(false);
      }
    }
  };
  //

  return (
    <>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingHorizontal: 20,
          backgroundColor: "white",
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
              <Pressable onPress={() => handleId(data.id)}>
                <Image
                  source={data.src}
                  style={{
                    height: 85,
                    width: 85,
                    backgroundColor: "white",
                    borderRadius: 100,
                  }}
                />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content
          maxWidth={deviceWidth - 30}
          maxHeight={deviceHeight / 1.4}
          width={deviceWidth}
          placement="center"
          backgroundColor={"white"}
        >
          {CertificateData.filter((data) => data.id === certId).map(
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
                    item.certImg.map((certData, key) => (
                      <View
                        style={{
                          shadowColor: "black",
                          shadowOpacity: 0.5,
                          shadowRadius: 2,
                          shadowOffset: {
                            height: 1,
                            width: 1,
                          },
                          marginBottom: 10,
                        }}
                        key={key}
                      >
                        <PanGestureHandler
                          onGestureEvent={onPanEvent}
                          ref={panRef}
                          simultaneousHandlers={[pinchRef]}
                          enabled={panEnabled}
                          failOffsetX={[-1000, 1000]}
                          shouldCancelWhenOutside
                        >
                          <Animated.View
                            style={{
                              shadowColor: "black",
                              shadowOpacity: 0.5,
                              shadowRadius: 2,
                              shadowOffset: {
                                height: 1,
                                width: 1,
                              },
                            }}
                          >
                            <PinchGestureHandler
                              ref={pinchRef}
                              onGestureEvent={onPinchEvent}
                              simultaneousHandlers={[panRef]}
                              onHandlerStateChange={handlePinchStateChange}
                            >
                              <Animated.Image
                                source={certData.imgSrc}
                                style={{
                                  width: deviceWidth - 62,
                                  height: 420,
                                  transform: [
                                    { scale },
                                    { translateX },
                                    { translateY },
                                  ],
                                  borderWidth: 1,
                                  borderColor: "black",
                                }}
                                resizeMode="contain"
                              />
                            </PinchGestureHandler>
                          </Animated.View>
                        </PanGestureHandler>
                      </View>
                    ))
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

export default Certification;
