import * as React from "react";
import { View, Text, Alert, Modal, TextInput } from "react-native";
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
import { AllAvatars } from "../data/avatars";

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const dispatch = useAppDispatch();

  const [newHouseModalVisible, setNewHouseModalVisible] = React.useState(false);
  const [houseHoldName, setHouseHoldName] = React.useState<string>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const [accountId, setAccountId] = React.useState<string>();
  const [avatar, setAvatar] = React.useState<Avatar>();

  const createNewHouse = () => {
    const newHouseHold = {
      Id: nextId(),
      Name: houseHoldName!,
      GeneratedCode: uuidv4(),
    };
    dispatch(AddHousehold(newHouseHold));
    console.log(newHouseHold);
    setNewHouseModalVisible(!newHouseModalVisible);
    Alert.alert("Added new household");
  };

  const closeModal = () => {
    setHouseHoldName("");
    setNewHouseModalVisible(false);
  };

  const handleAdd = () => {
    setNewHouseModalVisible(!newHouseModalVisible);
  };

  const handlePrint = () => {
    Alert.alert("Print (see console)");
    console.log("allHouseholds: ", allHouseholds);
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
            {/* <TextInput
              placeholder="E-mail"
              onChangeText={(value) => setHouseHoldName(value)}
            /> */}
            <TextInput
              style={styles.textInputBox}
              placeholder="Namn"
              value={houseHoldName}
              onChangeText={(value) => setHouseHoldName(value)}
            />
            <Text>

            </Text>
            <Picker
              selectedValue={avatar}
              onValueChange={(value, index) => setAvatar(value)}
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
