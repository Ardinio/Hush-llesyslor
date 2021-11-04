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

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "SelectHousehold"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

type LoginSchemaType = Record<keyof Login, Yup.AnySchema>;

const LoginSchema = Yup.object().shape<LoginSchemaType>({
  email: Yup.string().required("Fyll i din Email").email("Ange giltig mail"),
  password: Yup.string()
    .required("Fyll i ditt lösenord")
    .min(4, "Lösenordet måste vara minst 4 tecken"),
});

function LoginScreen({ navigation }: Props) {
  const activeAccount = useAppSelector(selectAccount);
  const allAccounts = useAppSelector(selectAllAccountsFromDatabase);
  const dispatch = useAppDispatch();

  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [modalVisible, setModalVisible] = React.useState(false);

  const logIn = (login: Login) => {
    const account = allAccounts.find(
      (a) => a.Email === login.email.toLowerCase().trim()
    );
    if (!account)
      return setErrorMsg("Finns inget konto registrerat på den E-postAdressen");
    if (account.Email !== login.email.toLowerCase().trim())
      return setErrorMsg("Email eller lösenordet är felaktigt");
    if (account.Password !== login.password.trim())
      return setErrorMsg("Email eller lösenordet är felaktigt");
    dispatch(
      SetActiveAccount({
        Id: account.Id,
        Email: account.Email,
        isLoggedIn: true,
      })
    );
    navigation.navigate("SelectHousehold");
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
    setErrorMsg("");
  };

  const switchHouse = () => {
    navigation.navigate("SelectHousehold");
  };

  const registerNewAccount = (login: Login) => {
    if (allAccounts.find((a) => a.Email === login.email.toLowerCase().trim()))
      return setErrorMsg("E-postadressen finns redan");
    dispatch(
      AddAccountToDatabase({
        Id: nextId(),
        Email: login.email.toLowerCase().trim(),
        Password: login.password.trim(),
      })
    );
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
        <View style={styles.buttonsContainer}>
        <Button
          buttonTitle="Logga Ut"
          btnType="sign-out-alt"
          onPress={logOut}
        ></Button>
        <Button
            buttonTitle="Mina hushåll"
            btnType="sign-in-alt"
            onPress={switchHouse}
          />
          </View>
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
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={registerNewAccount}
              validationSchema={LoginSchema}
            >
              {({ handleChange, handleSubmit, values, errors }) => (
                <>
                  <Text style={styles.errorText}>{errorMsg}</Text>
                  <View style={[styles.innerContainer, styles.marginTop]}>
                    <TextInput
                      style={styles.textInputBox}
                      placeholder="E-mail"
                      placeholderTextColor="grey"
                      value={values.email}
                      onChangeText={handleChange<keyof Login>("email")}
                      keyboardType="email-address"
                    />
                  </View>
                  <Text style={styles.errorText}>{errors.email}</Text>
                  <View style={[styles.innerContainer, styles.marginTop]}>
                    <TextInput
                      style={styles.textInputBox}
                      placeholder="Lösenord"
                      placeholderTextColor="grey"
                      value={values.password}
                      onChangeText={handleChange<keyof Login>("password")}
                      secureTextEntry
                    />
                  </View>
                  <Text style={styles.errorText}>{errors.password}</Text>
                  <View style={styles.buttonsContainer}>
                    <View style={styles.iconWrapper}>
                      <FontAwesome5
                        name="check"
                        style={styles.icon}
                        size={25}
                        onPress={handleSubmit as any}
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
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      <Image style={styles.loginLogo} source={require("../assets/logo.png")} />
      {/* Input form for Login */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={logIn}
        validationSchema={LoginSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={[styles.innerContainer, styles.marginTop]}>
              <TextInput
                style={styles.textInputBox}
                placeholder="E-mail"
                placeholderTextColor="grey"
                value={values.email}
                onChangeText={handleChange<keyof Login>("email")}
                keyboardType="email-address"
              />
            </View>
            <Text style={styles.errorText}>{errors.email}</Text>
            <View style={[styles.innerContainer, styles.marginTop]}>
              <TextInput
                style={styles.textInputBox}
                placeholder="Lösenord"
                placeholderTextColor="grey"
                value={values.password}
                onChangeText={handleChange<keyof Login>("password")}
                secureTextEntry
              />
            </View>
            <Text style={styles.errorText}>{errors.password} </Text>
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
    </View>
  );
}

export default LoginScreen;
