import * as React from "react";
import {
  View,
  Text,
  Alert,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
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
import { Household } from "../entities/Household";
import { AllAvatars } from "../data/avatars";
import { AddUser } from "../store/user/userActions";
import { selectAllUsers } from "../store/user/userSelectors";
import HouseholdCard from "../components/HouseholdCard";
import { selectAccount } from "../store/account/accountSelectors";

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const allUsers = useAppSelector(selectAllUsers);
  const dispatch = useAppDispatch();
  const activeAccount = useAppSelector(selectAccount);

  const [newHouseModalVisible, setNewHouseModalVisible] = React.useState(false);
  const [joinHouseModalVisible, setJoinHouseModalVisible] = React.useState(false);
  const [newUserModalVisible, setNewUserModalVisible] = React.useState(false);
  const [houseHoldName, setHouseHoldName] = React.useState<string>();
  const [houseHoldCode, setHouseHoldCode] = React.useState<string>();
  const [newHouseHold, setNewHouseHold] = React.useState<Household>();
  const [houseHold, setHouseHold] = React.useState<Household>();
  const [userName, setUserName] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [avatarId, setAvatarId] = React.useState<string>();
  const [avatarsAvailable, setAvatarsAvailable] = React.useState(AllAvatars)

  // Nollställer all data när modal stängs
  const closeModal = () => {
    setErrorMsg("");
    setHouseHoldName("");
    setUserName("");
    setHouseHoldCode("");
    setAvatarsAvailable(AllAvatars)
    setAvatarId(undefined);
    setNewHouseHold(undefined);
    setHouseHold(undefined);
    setNewHouseModalVisible(false);
    setNewUserModalVisible(false);
    setJoinHouseModalVisible(false);
  };

  const createNewHouse = () => {
    if (!houseHoldName) return setErrorMsg("Hushållet måste ha ett namn!");
    if (allHouseholds.find((h) => h.Name.toLowerCase() === houseHoldName.toLowerCase())) return setErrorMsg("Namnet finns redan, välj ett annat")
    setNewHouseHold({
      Id: nextId(),
      Name: houseHoldName.trim(),
      GeneratedCode: uuidv4().substring(0, 8),
    });
    setNewHouseModalVisible(false);
    setNewUserModalVisible(true);
    setErrorMsg("");
  };

  const joinHouse = () => {
    if (!houseHoldCode) return setErrorMsg("Du måste ange en kod!")
    const house = allHouseholds.find((h) => h.GeneratedCode === houseHoldCode);
    if (!house) return setErrorMsg("Hittar inget hushåll med den koden!")
    const usersInHouse = allUsers.filter((h) => h.HouseholdId === house.Id);
    if (usersInHouse.length === 8) return setErrorMsg("Hushållet är fullt!")
    const user = usersInHouse?.find((u) => u.AccountId === activeAccount.Id)
    // if (user) return setErrorMsg("Du är redan med i det här hushållet!")
    const avatars = AllAvatars.filter((a) => !usersInHouse.map(u => u.AvatarId).includes(a.Id))
    setAvatarsAvailable(avatars)
    setHouseHold(house);
    setNewUserModalVisible(true);
    setErrorMsg("");
  }

  const newUser = () => {
    if (!userName || !avatarId || avatarId === "0")
      return setErrorMsg("Du måste fylla i ett NAMN och välja en AVATAR");
    if (newHouseHold) {
      console.log("nytt hushåll") // Ta Bort
      dispatch(AddHousehold(newHouseHold!));
      dispatch(
        AddUser({
          Id: nextId(),
          AccountId: activeAccount.Id,
          HouseholdId: newHouseHold.Id,
          Name: userName,
          AvatarId: avatarId,
          IsOwner: true,
        })
      );
    } else if (houseHold){
      console.log("gå med i hushåll") // Ta Bort      
      dispatch(
        AddUser({
          Id: nextId(),
          AccountId: activeAccount.Id,
          HouseholdId: houseHold.Id,
          Name: userName,
          AvatarId: avatarId,
          IsOwner: false,
        })
      )};
    closeModal();
  };  

  const handleAdd = () => {
    setNewHouseModalVisible(!newHouseModalVisible);
  };

  const handleJoin = () => {
    setJoinHouseModalVisible(!joinHouseModalVisible);
  };

  const handlePrint = () => {
    Alert.alert("Print (see console)");
    console.log("allHouseholds: ", allHouseholds);
    console.log("allUsers: ", allUsers);
  };

  return (
    <View style={styles.container}>
      {/* Ta Bort Print-Knapp När Sidan Är Klar!!! */}
      <Button buttonTitle="Print" btnType="print" onPress={handlePrint} />
      <FlatList
        data={allHouseholds}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate("TaskScreen")}
            />
            <HouseholdCard
              household={{
                Id: item.Id,
                Name: item.Name,
                GeneratedCode: item.GeneratedCode,
              }}
            />
          </>
        )}

      />
      {/* Modal to create new HouseHold */}
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
            <Text style={styles.buttonText}>Skapa Nytt HusHåll</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder="Ange Ett Namn På Hushållet"
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
      {/* Modal to join existing HouseHold */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={joinHouseModalVisible}
        onRequestClose={() => {
          setJoinHouseModalVisible(!joinHouseModalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.buttonText}>Gå Med I HusHåll</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder="Ange Koden För Hushållet"
              value={houseHoldCode}
              onChangeText={(value) => setHouseHoldCode(value)}
            />
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.iconWrapper}>
                <FontAwesome5
                  name="check"
                  style={styles.icon}
                  size={25}
                  onPress={joinHouse}
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
      {/* Modal to create new User/Profile for HouseHold */}
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
          <Text style={styles.buttonText}>Skapa Din Profil För</Text>
          <Text style={styles.buttonText}>{newHouseHold?.Name || houseHold?.Name}</Text>
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
      
      <View style={styles.buttonsContainer}>
        <Button buttonTitle="New House" btnType="plus-circle" onPress={handleAdd} />
        <Button buttonTitle="Join House" btnType="sign-in-alt" onPress={handleJoin} />
      </View>
    </View>
  );
}

export default HomeScreen;
