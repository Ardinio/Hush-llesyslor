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
} from "react-native";
import { styles } from "../styles/Styles";

function LoginScreen() {
  const [loginEmail, setLoginEmail] = React.useState<string>();
  const [loginPassword, setLoginPassword] = React.useState<string>();
  const [modalVisible, setModalVisible] = React.useState(false);

  const login = () => {};
  const registerAccount = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
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
              value={loginEmail}
              onChangeText={(value) => setLoginEmail(value)}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Password"
              value={loginPassword}
              onChangeText={(value) => setLoginPassword(value)}
            />
            <View style={styles.buttonsContainer}>
              <TouchableHighlight
                onPress={registerAccount}
                style={styles.button}
                underlayColor={"#B6B8A8"}
              >
                <Text style={styles.buttonText}>Registrera</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.button}
                underlayColor={"#B6B8A8"}
              >
                <Text style={styles.buttonText}>Avbryt</Text>
              </TouchableHighlight>
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
