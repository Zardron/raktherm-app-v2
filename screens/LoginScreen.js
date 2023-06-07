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
  NativeBaseProvider,
  VStack,
  Link,
  Image,
  useToast,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import ToastMessage from "../components/ToastMessage";

const Drawer = createDrawerNavigator();

const LoginScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isGuestLogin, setIsGuestLogin] = React.useState(false);
  const deviceWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const toast = useToast();

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsGuestLogin(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsGuestLogin(false);
  };

  const navOptionHandler = () => ({
    headerShown: false,
  });

  return (
    <>
      {isLoggedIn ? (
        <NativeBaseProvider>
          <Drawer.Navigator
            initialRouteName="HomeMain"
            drawerContent={() => (
              <DrawerNavigator
                isLoggedIn={isLoggedIn}
                isGuestLogin={isGuestLogin}
                handleLogout={handleLogout}
              />
            )}
          >
            <Drawer.Screen
              name="HomeMain"
              component={TabNavigator}
              options={navOptionHandler}
            />
            <Drawer.Screen
              name="VideoGalleryMain"
              component={VideoGalleryStack}
              options={navOptionHandler}
            />
          </Drawer.Navigator>
        </NativeBaseProvider>
      ) : (
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
                Sign in to continue!
              </Heading>

              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Email ID</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link
                      _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500",
                      }}
                      alignSelf="flex-end"
                      mt="1"
                      onPress={handleLogin}
                    >
                      Sign In as Guest
                    </Link>
                    <Link
                      _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500",
                      }}
                      alignSelf="flex-end"
                      mt="1"
                    >
                      Forget Password?
                    </Link>
                  </View>
                </FormControl>
                <Pressable>
                  <Button
                    mt="2"
                    style={{ backgroundColor: "#0e9648" }}
                    onPress={() =>
                      toast.show({
                        render: ({ id }) => {
                          return (
                            <ToastMessage
                              title={"Email address and password is required!"}
                              variant={"top-accent"}
                              description={
                                "Please enter a valid email address and password"
                              }
                            />
                          );
                        },
                      })
                    }
                  >
                    Sign in
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
                    Don't have an account yet?
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
                      onPress={() => navigation.navigate("RegisterScreen")}
                    >
                      Sign Up
                    </Text>
                  </Pressable>
                </HStack>
              </VStack>
            </Box>
          </Center>
        </View>
      )}
    </>
  );
};

export default LoginScreen;
