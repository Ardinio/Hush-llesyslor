import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Modal,
  Image,
} from "react-native";
import { SetActiveAccount } from "../store/account/accountActions";
import { styles } from "../styles/Styles";
import nextId from "react-id-generator";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../navigation/RootNavigator";
import { Button } from "../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectAccount } from "../store/account/accountSelectors";
import { selectAllAccountsFromDatabase } from "../store/database/databaseSelectors";
import { AddAccountToDatabase } from "../store/database/databaseActions";

interface Login {
  email: string;
  password: string;
}

const defaultLogin: Login = { email: "", password: "" };

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "HomeScreen"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

type LoginSchemaType = Record<keyof Login, Yup.AnySchema>;

const LoginSchema = Yup.object().shape<LoginSchemaType>({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(4),
});

function LoginScreen({ navigation }: Props) {
  const activeAccount = useAppSelector(selectAccount);
  const allAccounts = useAppSelector(selectAllAccountsFromDatabase);
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [newEmail, setNewEmail] = React.useState<string>();
  const [newPassword, setNewPassword] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [modalVisible, setModalVisible] = React.useState(false);

  const logIn = (login: Login) => {
    console.log(login);
    if (!login.email || !login.password)
      return setErrorMsg("E-mail eller Password Saknas!");
    const account = allAccounts.find(
      (a) => a.Email === login.email.toLowerCase().trim()
    );
    if (!account)
      return setErrorMsg("Finns inget konto registrerat på den E-postAdressen");
    if (account.Email !== login.email.toLowerCase().trim())
      return setErrorMsg("Email eller Password är felaktigt");
    if (account.Password !== login.password.trim())
      return setErrorMsg("Email eller Password är felaktigt");
    dispatch(
      SetActiveAccount({
        Id: account.Id,
        Email: account.Email,
        isLoggedIn: true,
      })
    );
    // setEmail("");
    // setPassword("");
    navigation.navigate("HomeScreen");
  };

  const logOut = () => {
    setErrorMsg("");
    dispatch(
      SetActiveAccount({
        Id: "",
        Email: "",
        isLoggedIn: false,
      })
    );
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
    if (!newEmail || !newPassword)
      return setErrorMsg("E-mail eller Password Saknas!");
    if (allAccounts.find((a) => a.Email === newEmail.toLowerCase().trim()))
      return setErrorMsg("E-postadressen finns redan");
    dispatch(
      AddAccountToDatabase({
        Id: nextId(),
        Email: newEmail.toLowerCase().trim(),
        Password: newPassword.trim(),
      })
    );
    setNewEmail("");
    setNewPassword("");
    setErrorMsg("");
    setModalVisible(!modalVisible);
  };

  if (activeAccount.isLoggedIn) {
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
      {/* Modal för registrering av nytt konto */}
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
              style={styles.textInputBox}
              placeholder="E-mail"
              value={newEmail}
              onChangeText={(value) => setNewEmail(value)}
            />
            <TextInput
              style={styles.textInputBox}
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
      <Formik
        initialValues={defaultLogin}
        onSubmit={logIn}
        validationSchema={LoginSchema}
      >
        {({ handleChange, handleSubmit, values, errors}) => (
          <>
            <TextInput
              style={styles.textInputBox}
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange<keyof Login>("email")}
              keyboardType="email-address"
            />
            <Text style={styles.errorText}>{errors.email}</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange<keyof Login>("password")}
              secureTextEntry
            />
            <Text style={styles.errorText}>{errors.password}</Text>
            <Button
              buttonTitle="Logga in"
              btnType="sign-in-alt"
              onPress={handleSubmit as any}
            />
          </>
        )}
      </Formik>
      <TouchableHighlight onPress={handleModal}>
        <Text style={styles.clickableText}>Registrera Konto</Text>
      </TouchableHighlight>
      <Text style={styles.errorText}>{errorMsg}</Text>
    </View>
  );
}

export default LoginScreen;
