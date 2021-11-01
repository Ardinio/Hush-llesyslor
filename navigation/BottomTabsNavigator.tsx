import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  TaskScreen,
  ProfileScreen,
  StatisticsScreen
} from "../screens/index";
import { GenericScreenProps } from "./RootNavigator";


type TabParams = {
  Home: { householdId: string };
  Statistics: { householdId: string };
  Profile: { householdId: string };
};

// TODO: använd MaterialTopTabsNavigator.
const Tabs = createBottomTabNavigator<TabParams>();

const BottomTabsNavigator = ({ route }: GenericScreenProps<'HomeScreen'>) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        initialParams={route.params}
        name="Home" 
        component={TaskScreen} 
        options={{ tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="Statistics" 
        component={StatisticsScreen} 
        options={{ tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="chart-pie" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="face-profile" size={24} color={color} />
        }}
      />
    </Tabs.Navigator>
    
  );
};

export default BottomTabsNavigator;