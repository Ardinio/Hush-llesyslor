import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from "@react-navigation/stack";
import React, { FC, useEffect, useState } from "react";
import {
  LoginScreen,
  TaskScreen,
  SelectHouseholdScreen
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
  const [user, setUser] = useState<any>(null);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="SelectHousehold"
          component={SelectHouseholdScreen}
          options={{ title: "SelectHousehold" }}
        />
        <Screen
          name="HomeScreen"
          component={BottomTabsNavigator}
          options={{ title: "Home" }}
        />
        <Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
