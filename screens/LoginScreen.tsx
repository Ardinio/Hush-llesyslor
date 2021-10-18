import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Modal,
  Image,
  Alert,
} from "react-native";
import { AddAccount } from "../store/account/accountActions";
import { styles } from "../styles/Styles";
import nextId from "react-id-generator";
import { Accounts } from "../entities/Accounts";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../navigation/AppStack";

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "HomeScreen"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function LoginScreen({ navigation }: Props) {
  const [loginEmail, setLoginEmail] = React.useState<string>();
  const [loginPassword, setLoginPassword] = React.useState<string>();
  const [newUserPassword, setNewUserPassword] = React.useState<string>();
  const [newUserEmail, setNewUserEmail] = React.useState<string>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const logIn = () => {
    setIsLoggedIn(!isLoggedIn);
    navigation.navigate("HomeScreen");
  };

  const logOut = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const newAccount = () => {
    if (!newUserEmail) return setErrorMsg("E-mail eller Password Saknas!");
    if (!newUserPassword) return setErrorMsg("E-mail eller Password Saknas!");
    const newUserId = Number(nextId());
    const newAccount: Accounts = {
      Id: newUserId,
      Email: newUserEmail,
      Password: newUserPassword
    };
    dispatch(AddAccount(newAccount));
    Alert.alert("New user registered");
    setNewUserEmail("");
    setNewUserPassword("");
    setModalVisible(!modalVisible);
  };

  if (isLoggedIn) {
    return (
      <View style={styles.root}>
        <Image style={styles.loginLogo} source={require("../assets/logo.png")} />
        <Button title="Logga Ut" onPress={logOut}></Button>
      </View>
    )
  }

  return (
    <View style={styles.root}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInputBox}
              placeholder="E-mail"
              value={newUserEmail}
              onChangeText={(value) => setNewUserEmail(value)}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Password"
              value={newUserPassword}
              onChangeText={(value) => setNewUserPassword(value)}
            />
            <View style={styles.buttonsContainer}>
              <Button title="Registrera" onPress={newAccount}></Button>
              <Button
                title="Avbryt"
                onPress={() => setModalVisible(!modalVisible)}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
      <Image style={styles.loginLogo} source={require("../assets/logo.png")} />
      <TextInput
        style={styles.textInputBox}
        placeholder="E-mail"
        value={loginEmail}
        onChangeText={(value) => setLoginEmail(value)}
      />
      <TextInput
        style={styles.textInputBox}
        placeholder="Password"
        value={loginPassword}
        onChangeText={(value) => setLoginPassword(value)}
      />
      <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.clickableText}>Registrera Konto</Text>
      </TouchableHighlight>
      <Button title="Login" onPress={logIn} />
    </View>
  );
}

export default LoginScreen;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
