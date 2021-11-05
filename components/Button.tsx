import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';
import { FontAwesome5 } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { styles } from '../styles/Styles';
import React, { FC } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

interface Props {
  buttonTitle: string;
  btnType: string;
  onPress: () => void;
}

const Button: FC<Props> = (props) => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
                <View style={styles.iconWrapper}>
                    <FontAwesome5 name={props.btnType} style={styles.icon} size={18} />
                </View>
                <View style={styles.btnTxtWrapper}>
                    <Text style={styles.buttonText}>{props.buttonTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

export default Button;
