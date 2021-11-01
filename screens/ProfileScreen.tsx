import React from "react";
import { View, Text, Modal, Image } from "react-native";
import { List, Switch } from "react-native-paper";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectAllUsers, selectUserById } from "../store/user/userSelectors";
import { EditUser } from "../store/user/userActions";
import { AllAvatars, singleAvatarPath } from "../data/avatars";
import { Button } from "../components";
import { styles } from "../styles/Styles";
import { GenericScreenProps } from "../navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

// type Props = GenericScreenProps<"ProfileScreen">;

function ProfileScreen() {
  const allUsers = useAppSelector(selectAllUsers);
  const currentUser = useAppSelector(selectUserById("6"));
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

  const deleteUserFromHouse = () => {};

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          style={styles.profileAvatar}
          source={singleAvatarPath(currentUser?.AvatarId!)}
        />
        <Text style={styles.buttonText}>{currentUser?.Name}</Text>
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