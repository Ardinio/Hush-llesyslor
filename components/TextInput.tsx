import React, { FC } from "react";
import { View } from "react-native";
import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { TextInput } from "react-native-gesture-handler";
import { styles } from '../styles/Styles';


interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    );
  }
};

export default Input;
