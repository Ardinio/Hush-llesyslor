import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
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
import { selectAllUsers, selectCurrentUser, selectUserById } from "../store/user/userSelectors";
import { selectAccount } from "../store/account/accountSelectors";
import { selectActiveHousehold, selectAllHouseholds } from "../store/household/householdSelectors";
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
  const allUsers = useAppSelector(selectAllUsers);
  const activeHouse = useAppSelector(selectActiveHousehold)
  const currentUser = useAppSelector(selectCurrentUser(activeAccount.Id, activeHouse?.Id!))
  const currentAvatar = singleAvatarById(currentUser?.AvatarId!);
  const dispatch = useAppDispatch();

  const [editUserModalVisible, setEditUserModalVisible] = React.useState(false);
  const [leaveHouseModalVisible, setLeaveHouseModalVisible] =
    React.useState(false);
  const [userName, setUserName] = React.useState<string>(currentUser?.Name!);
  const [avatarId, setAvatarId] = React.useState<string>(currentUser?.AvatarId!);
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [avatarsAvailable, setAvatarsAvailable] = React.useState(AllAvatars);

  const closeModal = () => {
    setErrorMsg("");
    setEditUserModalVisible(false);
    setLeaveHouseModalVisible(false);
  };

  const handleDelete = () => {
    setLeaveHouseModalVisible(!leaveHouseModalVisible);
  };

  const editUser = () => {
    if (!userName || !avatarId || avatarId === "0")
      return setErrorMsg("Du måste fylla i ett NAMN och välja en AVATAR");
    if (!currentUser) return setErrorMsg("Something went wrong")
    dispatch(
      EditUser({
        Id: currentUser.Id,
        AccountId: currentUser.AccountId,
        HouseholdId: currentUser.HouseholdId,
        Name: userName,
        AvatarId: avatarId,
        IsOwner: currentUser.IsOwner,
      })
    );
    closeModal();
  };

  const handleEdit = () => {
    const usersInHouse = allUsers.filter(
      (h) => h.HouseholdId === activeHouse!.Id
    );
    const avatars = AllAvatars.filter(
      (a) => !usersInHouse.map((u) => u.AvatarId).includes(a.Id)
    );
    setAvatarsAvailable(avatars);
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
    
  });

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={[styles.profileAvatar, localStyles.backgroundColor]}>
          <Image source={singleAvatarPath(currentUser?.AvatarId!)} />
        </View>
        <View style={styles.itemLeft}>
          <Text style={[styles.buttonText, styles.bigFont]}>
            {currentUser?.Name}{" "}
          </Text>
          <TouchableOpacity onPress={handleEdit}>
            <MaterialCommunityIcons name="pencil" size={20} />
          </TouchableOpacity>
        </View>
        {/* Modal for confirmation before leaving house */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={leaveHouseModalVisible}
          onRequestClose={() => {
            setLeaveHouseModalVisible(!leaveHouseModalVisible);
          }}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <View style={styles.root}>
                <Text style={styles.buttonText}>Vill Du Verkligen Lämna:</Text>
                <Text style={[styles.nameText, styles.bigFont]}>
                  {activeHouse?.Name}
                </Text>
              </View>
              <View style={styles.buttonsContainer}>
                <View style={styles.iconWrapper}>
                  <FontAwesome5
                    name="check"
                    style={styles.icon}
                    size={25}
                    onPress={deleteUserFromHouse}
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
        {/* Modal to Edit User Name & Avatar */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={editUserModalVisible}
          onRequestClose={() => {
            setEditUserModalVisible(!editUserModalVisible);
          }}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.buttonText}>Ändra Din Profil För</Text>
              <Text style={[styles.nameText, styles.bigFont]}>
                {activeHouse?.Name}
              </Text>
              <TextInput
                style={styles.textInputBox}
                placeholder="Ange Ditt Namn"
                value={userName}
                onChangeText={(value) => setUserName(value)}
              />
              <Picker
                selectedValue={avatarId}
                onValueChange={(value, index) => setAvatarId(value)}
                mode="dropdown" // Android only
                style={styles.picker}
              >
                {avatarsAvailable.map((item, index) => {
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
        <View style={[styles.buttonsContainer, styles.buttonPositionAbsolute]}>
          <Button
            buttonTitle="Switch House"
            btnType="sign-in-alt"
            onPress={switchHouse}
          />
          <Button
            buttonTitle="Leave House"
            btnType="sign-out-alt"
            onPress={handleDelete}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default ProfileScreen;
