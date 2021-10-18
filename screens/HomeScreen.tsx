import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from '../styles/Styles';
import TaskCard from '../components/TaskCard';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TaskCard/>
    </View>
  );
}

export default HomeScreen;