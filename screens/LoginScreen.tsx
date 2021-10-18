import { Link } from "@react-navigation/native";
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
  Pressable,
} from "react-native";
import { AddAccount } from "../store/account/accountActions";
import { styles } from "../styles/Styles";
import nextId from "react-id-generator";

function LoginScreen() {
  const [loginEmail, setLoginEmail] = React.useState<string>();
  const [loginPassword, setLoginPassword] = React.useState<string>();
  const [newUserPassword, setNewUserPassword] = React.useState<string>();
  const [newUserEmail, setNewUserEmail] = React.useState<string>();
  const [modalVisible, setModalVisible] = React.useState(false);

  const login = () => {};
  
  const newAccount = () => {
    const newUserId = Number(nextId());
    dispatch(AddAccount({Id: newUserId, Email: newUserEmail!, Password: newUserPassword!}));
    Alert.alert('Added new household');
    setModalVisible(!modalVisible);
  };

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
              <Pressable
                onPress={newAccount}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Registrera</Text>
              </Pressable>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Avbryt</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Image style={styles.loginLogo} source={require('../assets/logo.png')} />
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
      <Link to={{ screen: "HomeScreen" }}>
        {/* <Button title="Login" onPress={login}/> */}
        <Text>LoginButton</Text>
      </Link>
    </View>
  );
}

export default LoginScreen;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

