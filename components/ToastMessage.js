import { View, Text } from "react-native";
import React from "react";
import { Alert, Center, HStack, VStack, useToast } from "native-base";

const ToastMessage = ({ status, variant, title, description }) => {
  const toast = useToast();

  return (
    <Center>
      <VStack space={2}>
        <Alert
          maxWidth="90%"
          alignSelf="center"
          flexDirection="row"
          alignItem="center"
          justifyContent={"center"}
          status={status ? status : "error"}
          variant={variant}
        >
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} alignItems="center" justifyContent="center">
              <HStack
                space={2}
                flexShrink={1}
                alignItems="center"
                justifyContent="center"
              >
                <Alert.Icon />
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  color={
                    variant === "solid"
                      ? "lightText"
                      : variant !== "outline"
                      ? "darkText"
                      : null
                  }
                >
                  {title}
                </Text>
                <Alert.Icon />
              </HStack>
            </HStack>
            <HStack flexShrink={1} alignItems="center" justifyContent="center">
              <HStack
                space={2}
                flexShrink={1}
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  space={2}
                  flexShrink={1}
                  alignItems="center"
                  justifyContent="center"
                  px="6"
                  color={
                    variant === "solid"
                      ? "lightText"
                      : variant !== "outline"
                      ? "darkText"
                      : null
                  }
                >
                  {description}
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Alert>
      </VStack>
    </Center>
  );
};

export default ToastMessage;
