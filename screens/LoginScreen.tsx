import * as React from "react";
import {
  View,
  Text,
  TextInput,
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
import { Button } from "../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectAllAccounts } from "../store/account/accountSelectors";

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "HomeScreen"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function LoginScreen({ navigation }: Props) {
  const allAccounts = useAppSelector(selectAllAccounts);
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const logIn = () => {
    setIsLoggedIn(!isLoggedIn);
    navigation.navigate("HomeScreen");
  };

  const logOut = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
    setEmail("");
    setPassword("");
    setErrorMsg("");
  };

  const newAccount = () => {
    console.log(email)
    if (allAccounts.find(a => a.Email === email)) return setErrorMsg("E-postadressen finns redan")
    if (!email || !password)
      return setErrorMsg("E-mail eller Password Saknas!");
    dispatch(
      AddAccount({
        Id: nextId(),
        Email: email,
        Password: password,
      })
    );
    Alert.alert("New user registered");
    console.log(allAccounts); // remove line when finished!!!
    setEmail("");
    setPassword("");
    setErrorMsg("");
    setModalVisible(!modalVisible);
  };

  if (isLoggedIn) {
    return (
      <View style={styles.root}>
        <Image
          style={styles.loginLogo}
          source={require("../assets/logo.png")}
        />
        <Button
          buttonTitle="Logga Ut"
          btnType="sign-out-alt"
          onPress={logOut}
        ></Button>
      </View>
    );
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
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.iconWrapper}>
                <FontAwesome5
                  name="check"
                  style={styles.icon}
                  size={25}
                  onPress={newAccount}
                />
              </View>
              <View style={styles.iconWrapper}>
                <FontAwesome5
                  name="arrow-circle-down"
                  style={styles.icon}
                  size={25}
                  onPress={closeModal}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Image style={styles.loginLogo} source={require("../assets/logo.png")} />
      <TextInput
        style={styles.textInputBox}
        placeholder="E-mail"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.textInputBox}
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.clickableText}>Registrera Konto</Text>
      </TouchableHighlight>
      <Button buttonTitle="Logga in" btnType="sign-in-alt" onPress={logIn} />
    </View>
  );
}

export default LoginScreen;
