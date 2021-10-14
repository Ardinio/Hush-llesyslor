import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from '../styles/Styles';
import { Button } from '../components';
import { GenericScreenProps } from '../navigation/AppStack';

type Props = GenericScreenProps<"HomeScreen">;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      {/* Endast för test av komponenter */}
      <Button
        buttonTitle="Edit"
        btnType="pencil-alt"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
}

export default HomeScreen;