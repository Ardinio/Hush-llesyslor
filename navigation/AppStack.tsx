import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps
} from "@react-navigation/stack";
import React, { FC, useEffect, useState } from "react";
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  StatisticsScreen,
  TaskScreen
} from "../screens/index";

export type AppStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  ProfileScreen: { id: number };
  SplashScreen: undefined;
  StatisticsScreen: undefined;
  TaskScreen: { id: number };
};

export type GenericNavigationProps = StackNavigationProp<AppStackParamList>;

export type GenericScreenProps<customScreen extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, customScreen>;

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

const AppStack: FC = () => {
  const [user, setUser] = useState<any>(null);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: true }}>
        <Screen
          name="ProfileScreen"
          component={ ProfileScreen }
          options={{ title: "Profil" }}
        />
        <Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />

        <Screen
          name="StatisticsScreen"
          component={ StatisticsScreen }
          options={{ title: "Statistics" }}
        />

        <Screen
          name="TaskScreen"
          component={TaskScreen}
          options={{ title: "Task" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;