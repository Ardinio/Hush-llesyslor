import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from "@react-navigation/stack";
import React, { FC } from "react";
import { LoginScreen } from "../screens/index";
import BottomTabsNavigator from "./BottomTabsNavigator";

export type AppStackParamList = {
  HomeScreen: { id: string };
  LoginScreen: undefined;
  ProfileScreen: { id: number };
  SplashScreen: undefined;
  StatisticsScreen: undefined;
  TaskScreen: undefined;
};

export type GenericNavigationProps = StackNavigationProp<AppStackParamList>;

export type GenericScreenProps<customScreen extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, customScreen>;

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

const RootNavigator: FC = () => {

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Screen
          name="HomeScreen"
          component={BottomTabsNavigator}
          options={{ title: "Home" }}
        />
        <Screen
          name="ProfileScreen"
          component={BottomTabsNavigator}
          options={{ title: "Profil" }}
        />
        <Screen
          name="StatisticsScreen"
          component={BottomTabsNavigator}
          options={{ title: "Statistics" }}
        />
        <Screen
          name="TaskScreen"
          component={BottomTabsNavigator}
          options={{ title: "Tasks" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
