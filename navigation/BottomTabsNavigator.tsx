import React from "react";
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  StatisticsScreen,
  TaskScreen
} from "../screens/index";


type RootTabParams = {
  Home: undefined;
  Statistics: undefined;
  Profile: undefined;
  Tasks: undefined;
};

const Tabs = createBottomTabNavigator<RootTabParams>();

const BottomTabsNavigator = () => {

  return (

    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="chart-pie" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="face-profile" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color }) =>
            <FontAwesome5 name="tasks" size={24} color={color} />
        }}
      />
    </Tabs.Navigator>

  );
};

export default BottomTabsNavigator;