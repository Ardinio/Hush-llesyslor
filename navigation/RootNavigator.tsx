import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from "@react-navigation/stack";
import React, { FC } from "react";
import {
  LoginScreen,
  SelectHouseholdScreen,
} from "../screens/index";
import BottomTabsNavigator from "./BottomTabsNavigator";

export type AppStackParamList = {
  SelectHousehold: undefined;
  HomeScreen: { householdId: string };
  LoginScreen: undefined;
  SplashScreen: undefined;
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
          options={{ title: "Logga ut" }}
        />
        <Screen
          name="SelectHousehold"
          component={SelectHouseholdScreen}
          options={{ title: "Mina Hushåll", headerShown: true }}
        />
        <Screen
          name="HomeScreen"
          component={BottomTabsNavigator}
          options={{ title: "" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
