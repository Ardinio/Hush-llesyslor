import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { List, Switch } from "react-native-paper";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "../store/store";
import { EditUser } from "../store/user/userActions";
import {
  AllAvatars,
  singleAvatarById,
  singleAvatarPath,
} from "../data/avatars";
import { Button } from "../components";
import { styles } from "../styles/Styles";
import {
  AppStackParamList,
  GenericScreenProps,
} from "../navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { selectAllUsers, selectUserById } from "../store/user/userSelectors";
import { selectAccount } from "../store/account/accountSelectors";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { StackNavigationProp } from "@react-navigation/stack";
import { DeleteUser } from "../store/user/userActions";

// type Props = GenericScreenProps<"ProfileScreen">;
type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "SelectHousehold"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function ProfileScreen({ navigation }: Props) {
  const activeAccount = useAppSelector(selectAccount);
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const allUsers = useAppSelector(selectAllUsers);
  const activeHouse = allHouseholds.find((h) => h.Id === "1"); // måste ändras !!!
  const currentUser = allUsers.find(
    (u) => u.AccountId === activeAccount.Id && u.HouseholdId === activeHouse?.Id
  );
  const currentAvatar = singleAvatarById(currentUser?.AvatarId!);
  const dispatch = useAppDispatch();

  const [editUserModalVisible, setEditUserModalVisible] = React.useState(false);
  const [userName, setUserName] = React.useState<string>();
  const [avatarId, setAvatarId] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState<string>();

  const closeModal = () => {
    setErrorMsg("");
    setUserName("");
    setAvatarId("");
    setEditUserModalVisible(false);
  };

  const editUser = () => {
    if (!userName || !avatarId)
      return setErrorMsg("Du måste fylla i ett NAMN och välja en AVATAR");
    if (avatarId === "")
      //if (!userName || !avatarId || avatarId === 0)

      return setErrorMsg("Du måste välja en AVATAR");

    // dispatch(
    //   EditUser({
    //     Id: "1",
    //     AccountId: "1",
    //     HouseholdId: "1",
    //     Name: "Kristina",
    //     AvatarId: "8",
    //     IsOwner: true,
    //   })
    // );
    closeModal();
  };

  const handleEdit = () => {
    setEditUserModalVisible(!editUserModalVisible);
  };

  const deleteUserFromHouse = () => {
    dispatch(DeleteUser(currentUser!));
    navigation.navigate("SelectHousehold");
  };

  const switchHouse = () => {
    navigation.navigate("SelectHousehold");
  };

  const localStyles = StyleSheet.create({
    backgroundColor: {
      backgroundColor: currentAvatar.Color!,
    },
    bigFont: {
      fontSize: 30,
    },
  });

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={[styles.profileAvatar, localStyles.backgroundColor]}>
          <Image source={singleAvatarPath(currentUser?.AvatarId!)} />
        </View>
        <View style={styles.itemLeft}>
          <Text style={[styles.buttonText, localStyles.bigFont]}>
            {currentUser?.Name}{" "}  
          </Text>
          <TouchableOpacity onPress={handleEdit}>
            <MaterialCommunityIcons name="pencil" size={20} />
          </TouchableOpacity>
        </View>
        {/* Modal to Edit User Name & Avatar */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={editUserModalVisible}
          onRequestClose={() => {
            setEditUserModalVisible(!editUserModalVisible);
          }}
        >
          {/* <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.buttonText}>Redigera Profil</Text>
              <TextInput
                style={styles.textInputBox}
                placeholder="Nytt Namn"
                value={userName}
                onChangeText={(value) => setUserName(value)}
              />
              <Picker
                selectedValue={avatarId}
                onValueChange={(value) => setAvatarId(value)}
                mode="dropdown" // Android only
                style={styles.picker}
              >
                {AllAvatars.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.Emoji}
                      value={item.Id}
                      key={index}
                    />
                  );
                })}
              </Picker>
              <Text style={styles.errorText}>{errorMsg}</Text>
              <View style={styles.buttonsContainer}>
                <View style={styles.iconWrapper}>
                  <FontAwesome5
                    name="check"
                    style={styles.icon}
                    size={25}
                    onPress={editUser}
                  />
                </View>
                <View style={styles.iconWrapper}>
                  <MaterialCommunityIcons
                    name="close-circle"
                    style={styles.icon}
                    size={27}
                    onPress={closeModal}
                  />
                </View>
              </View>
            </View>
          </View> */}
        </Modal>
        <View style={styles.buttonsContainer}>
          <Button
            buttonTitle="Switch House"
            btnType="sign-in-alt"
            onPress={switchHouse}
          />
          <Button
            buttonTitle="Leave House"
            btnType="sign-out-alt"
            onPress={deleteUserFromHouse}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default ProfileScreen;
