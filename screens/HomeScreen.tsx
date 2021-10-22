import * as React from "react";
import { View, Text, Alert, Modal, TextInput, Image } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { GenericScreenProps } from "../navigation/AppStack";
import { useAppSelector, useAppDispatch } from "../store/store";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { AddHousehold } from "../store/household/householdActions";
import { FontAwesome5 } from "@expo/vector-icons";
import nextId from "react-id-generator";
import { v4 as uuidv4 } from "uuid";
import { Picker } from "@react-native-picker/picker";
import { Avatar } from "../entities/Avatar";
import { Household } from "../entities/Household";
import { AllAvatars } from "../data/avatars";
import { AddUser } from "../store/user/userActions";
import { selectAllUsers } from "../store/user/userSelectors";

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const allUsers = useAppSelector(selectAllUsers);
  const dispatch = useAppDispatch();

  const [newHouseModalVisible, setNewHouseModalVisible] = React.useState(false);
  const [newUserModalVisible, setNewUserModalVisible] = React.useState(false);
  const [houseHoldName, setHouseHoldName] = React.useState<string>();
  const [newHouseHold, setNewHouseHold] = React.useState<Household>();
  const [userName, setUserName] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [avatarId, setAvatarId] = React.useState<number>();
  const [accountId, setAccountId] = React.useState<string>("test-id1");

  const createNewHouse = () => {
    if (!houseHoldName) return setErrorMsg("Hushållet måste ha ett namn!");
    setNewHouseHold({
      Id: nextId(),
      Name: houseHoldName,
      GeneratedCode: uuidv4(),
    });
    setNewHouseModalVisible(false);
    setNewUserModalVisible(true);
    setErrorMsg("");
  };

  const newUser = () => {
    if (!userName || !avatarId)
      return setErrorMsg("Du måste fylla i ett NAMN och välja en AVATAR");
    if (avatarId === 0)
      return setErrorMsg("Du måste fylla i ett NAMN och välja en AVATAR");
    console.log(newHouseHold);
    dispatch(AddHousehold(newHouseHold!));
    dispatch(
      AddUser({
        Id: nextId(),
        AccountId: accountId,
        HouseholdId: newHouseHold?.Id!,
        Name: userName,
        AvatarId: avatarId,
        IsOwner: true,
      })
    );
    setNewUserModalVisible(false);
    setErrorMsg("");
  };

  const closeModal = () => {
    setErrorMsg("");
    setHouseHoldName("");
    setUserName("");
    setAvatarId(undefined);
    setNewHouseHold(undefined);
    setNewHouseModalVisible(false);
    setNewUserModalVisible(false);
  };

  const handleAdd = () => {
    setNewHouseModalVisible(!newHouseModalVisible);
  };

  const handlePrint = () => {
    Alert.alert("Print (see console)");
    console.log("allHouseholds: ", allHouseholds);
    console.log("allUsers: ", allUsers);
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={newHouseModalVisible}
        onRequestClose={() => {
          setNewHouseModalVisible(!newHouseModalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInputBox}
              placeholder="Hushållets Namn"
              value={houseHoldName}
              onChangeText={(value) => setHouseHoldName(value)}
            />
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.iconWrapper}>
                <FontAwesome5
                  name="check"
                  style={styles.icon}
                  size={25}
                  onPress={createNewHouse}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={newUserModalVisible}
        onRequestClose={() => {
          setNewUserModalVisible(!newUserModalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInputBox}
              placeholder="Ditt Namn"
              value={userName}
              onChangeText={(value) => setUserName(value)}
            />
            <Picker
              selectedValue={avatarId}
              onValueChange={(value, index) => setAvatarId(value)}
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
                  onPress={newUser}
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
      <Text>Home Screen</Text>

      <View style={styles.buttonsContainer}>
        <Button
          buttonTitle="Household"
          btnType="plus-circle"
          onPress={handleAdd}
        />

        <Button buttonTitle="Print" btnType="print" onPress={handlePrint} />
      </View>
    </View>
  );
}

export default HomeScreen;
