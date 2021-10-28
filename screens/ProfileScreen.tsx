import React from 'react';
import { View, TextInput, Text, Modal, Pressable, Alert } from 'react-native';
import { List, Switch } from 'react-native-paper';
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectAllUsers, selectUserById } from '../store/user/userSelectors';
import { EditUser } from '../store/user/userActions';
import { AllAvatars } from '../data/avatars';
import { Button } from "../components";
import { styles } from "../styles/Styles";
import { GenericScreenProps } from '../navigation/RootNavigator';

type Props = GenericScreenProps<"ProfileScreen">;


function ProfileScreen({route}: Props) {
  const allUsers = useAppSelector(selectAllUsers);
  // const user = useAppSelector(selectUserById());  
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

  const handlePrint = () => {
    Alert.alert("Print (see console)");
    console.log("allUsers: ", allUsers);
  };
 

  return (
    <View style={{ flex: 1 }}>
      <List.Item
                title="Light Mode"
                left={() => <List.Icon icon="brightness-5" />}
                right={() => <Switch />}
            />
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
                  <Picker.Item label={item.Emoji} value={item.Id} key={index} />
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
        </View>
      </Modal>
             <Pressable style={styles.avatarContainer} onPress={handleEdit}>
            <View style={styles.avatarWrapper}>
              <Text style={styles.icon1}>{avatarId}</Text>
              <Text>Press to edit</Text>
            </View>
            </Pressable>
            <Text>{userName}</Text>

            <View style={styles.input}>
            {/* <Button buttonTitle="Edit Profile" btnType="pen" onPress={handleEdit} /> */}
            <Button buttonTitle="Print" btnType="print" onPress={handlePrint} />
            </View>
      
    </View>
  );
}

export default ProfileScreen;


// const styles = StyleSheet.create({
//   avatarContainer: {
//     marginTop: 70,
//     marginLeft: 110,
//     width: "45%",
//     height: "30%",
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 100,
//     backgroundColor: '#FFFFFF',
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOpacity: 0.8,
//     elevation: 6,
//     shadowRadius: 15 ,
//     shadowOffset : { width: 1, height: 13},
//   },
//   avatarWrapper: {
//     width: 170,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 25,
//   },

//   textInput: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "black",
//   },
//   icon: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 10,
//     fontSize: 80,
//     fontWeight: "bold",
//     color: "black",
//   },
// });
