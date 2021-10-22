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

// TODO
// Add Formik
// Add validation for e-mail, add encryption on password, add snackbar on new account

function LoginScreen({ navigation }: Props) {
  const allAccounts = useAppSelector(selectAllAccounts);
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [newEmail, setNewEmail] = React.useState<string>();
  const [newPassword, setNewPassword] = React.useState<string>();
  const [accountId, setAccountId] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const logIn = () => {
    if (!email || !password) return setErrorMsg("E-mail eller Password Saknas!")
    if (!allAccounts.find((a) => a.Email === email.toLowerCase().trim()))
      return setErrorMsg("Email eller Password är felaktigt");
    const account = allAccounts.find((a) => a.Email === email.toLowerCase().trim());
    if (account?.Password !== password.trim())
      return setErrorMsg("Email eller Password är felaktigt");
    setAccountId(account?.Id);
    setIsLoggedIn(!isLoggedIn);
    setEmail("");
    setPassword("");
    navigation.navigate("HomeScreen", {id: accountId!}); // send accountID !!
  };

  const logOut = () => {
    setErrorMsg("");
    setAccountId("");
    setIsLoggedIn(!isLoggedIn);
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
    setEmail("");
    setPassword("");
    setNewEmail("");
    setNewPassword("");
    setErrorMsg("");
  };

  const registerNewAccount = () => {
    console.log(newEmail); // remove line when finished!!!
    if (!newEmail || !newPassword)
      return setErrorMsg("E-mail eller Password Saknas!");
    if (allAccounts.find((a) => a.Email === newEmail.toLowerCase().trim()))
      return setErrorMsg("E-postadressen finns redan");
    dispatch(
      AddAccount({
        Id: nextId(),
        Email: newEmail.toLowerCase().trim(),
        Password: newPassword.trim(),
      })
    );
    Alert.alert("New user registered"); // replace Alert with SnackBar !!
    console.log(allAccounts); // remove line when finished!!!
    setNewEmail("");
    setNewPassword("");
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
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInputModal}
              placeholder="E-mail"
              value={newEmail}
              onChangeText={(value) => setNewEmail(value)}
            />
            <TextInput
              style={styles.textInputModal}
              placeholder="Password"
              value={newPassword}
              onChangeText={(value) => setNewPassword(value)}
            />
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.iconWrapper}>
                <FontAwesome5
                  name="check"
                  style={styles.icon}
                  size={25}
                  onPress={registerNewAccount}
                />
              </View>
              <View style={styles.iconWrapper}>
                <FontAwesome5
                  name="arrow-circle-down"
                  style={styles.icon}
                  size={25}
                  onPress={handleModal}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Image style={styles.loginLogo} source={require("../assets/logo.png")} />
      <TextInput
        style={styles.textInputModal}
        placeholder="E-mail"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.textInputModal}
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableHighlight onPress={handleModal}>
        <Text style={styles.clickableText}>Registrera Konto</Text>
      </TouchableHighlight>
      <Text style={styles.errorText}>{errorMsg}</Text>
      <Button buttonTitle="Logga in" btnType="sign-in-alt" onPress={logIn} />
    </View>
  );
}

export default LoginScreen;
