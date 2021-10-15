import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from "../components";
import { styles } from '../styles/Styles';


const HomeScreen = () => {
  const [text, setText] = React.useState<string>();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      {/* Inlagd endast för test */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Text Input"
          onChangeText={(text) => setText(text)}
        />
      </View>


    </View>
  );
}

export default HomeScreen;