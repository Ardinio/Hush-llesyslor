import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStack from './navigation/AppStack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" translucent={true} />
      <AppStack />
    </SafeAreaProvider>
  );
}

export default App;