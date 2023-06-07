import * as React from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../TabNavigator";
import DrawerNavigator from "../DrawerNavigator";
import { VideoGalleryStack } from "../StackNavigator";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  VStack,
  Link,
  Image,
  useToast,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import ToastMessage from "../components/ToastMessage";

const RegisterScreen = () => {
  const deviceWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const toast = useToast();

  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState(false);

  const onSubmit = () => {
    setErrors(true);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StatusBar bg="#3700B3" barStyle="dark-content" />
        <Image
          source={require("../assets/logo_agt.png")}
          width={deviceWidth}
          height={180}
          alt="logo"
        />
        <Center w="100%">
          <Box w="100%" maxW={deviceWidth - 80}>
            <Heading
              size="xl"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Sign Up to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl isRequired isInvalid={errors}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}
                >
                  Name
                </FormControl.Label>
                <Input
                  placeholder="John Doe"
                  onChangeText={(value) =>
                    setData({ ...formData, name: value })
                  }
                />
                {errors ? (
                  <FormControl.ErrorMessage>
                    Name is required.
                  </FormControl.ErrorMessage>
                ) : (
                  <FormControl.HelperText>
                    Name should contain atleast 3 character.
                  </FormControl.HelperText>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={errors}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}
                >
                  Email
                </FormControl.Label>
                <Input
                  placeholder="xyz@email.com"
                  onChangeText={(value) =>
                    setData({ ...formData, name: value })
                  }
                />
                {errors ? (
                  <FormControl.ErrorMessage>
                    Email is required.
                  </FormControl.ErrorMessage>
                ) : (
                  <FormControl.HelperText>
                    Email should be valid.
                  </FormControl.HelperText>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={errors}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}
                >
                  Password
                </FormControl.Label>
                <Input
                  placeholder="••••••••••••"
                  type="password"
                  onChangeText={(value) =>
                    setData({ ...formData, name: value })
                  }
                />
                {errors ? (
                  <FormControl.ErrorMessage>
                    Password is required.
                  </FormControl.ErrorMessage>
                ) : (
                  <FormControl.HelperText>
                    Password should contain atleast 8 character.
                  </FormControl.HelperText>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={errors}>
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}
                >
                  Confirm Password
                </FormControl.Label>
                <Input
                  placeholder="••••••••••••"
                  type="password"
                  onChangeText={(value) =>
                    setData({ ...formData, name: value })
                  }
                />
                {errors ? (
                  <FormControl.ErrorMessage>
                    Password and confirm password does not match.
                  </FormControl.ErrorMessage>
                ) : (
                  <FormControl.HelperText>
                    Password and confirm password should be match.
                  </FormControl.HelperText>
                )}
              </FormControl>

              <Pressable>
                <Button
                  mt="2"
                  style={{ backgroundColor: "#0e9648" }}
                  onPress={onSubmit}
                >
                  Sign Up
                </Button>
              </Pressable>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  Already have an account?
                </Text>
                <Pressable>
                  <Text
                    fontSize="sm"
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    style={{
                      textDecorationLine: "underline",
                      paddingLeft: 5,
                      color: "blue",
                    }}
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    Sign In
                  </Text>
                </Pressable>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </View>
    </>
  );
};

export default RegisterScreen;
