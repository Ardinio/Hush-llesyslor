import * as React from "react";
import { Text, TouchableOpacity, View, Modal, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { useAppDispatch } from "../store/store";
import { styles } from "../styles/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EditHousehold } from "../store/household/householdActions";
import { Household } from '../entities/Household';

interface Props {
  household: Household,
  isowner: boolean,
  users: any[]
}

const HouseholdCard = ({ household, isowner, users }: Props) => {
  const dispatch = useAppDispatch();
  const [editHouseholdNameModalVisibility, setEditHouseholdNameModalVisibility] = React.useState(false);
  const [houseHoldName, setHouseHoldName] = React.useState<string>();
  const [houseHoldId, setHouseHoldId] = React.useState<string>("");
  const [errorMsg, setErrorMsg] = React.useState<string>();

  const closeModal = () => {
    setErrorMsg("");
    setHouseHoldId("");
    setHouseHoldName("");
    setEditHouseholdNameModalVisibility(false);
  };

  const editHouseholdName = () => {
    if (!houseHoldName)
      return setErrorMsg("Fältet med namn för ett hushåll får inte vara tomt!");
    else {
      const householdWithNewName: Household = { ...household, Name: houseHoldName ?? "" };
      dispatch(EditHousehold(householdWithNewName));
      closeModal();
    }
  };
  const { Name, GeneratedCode, Id } = household;
  return (
    //TODO: Check CSS to reuse several classes
      <>
        <Card style={styles.Card}>
          <View style={styles.textAlign}>
            <Text style={styles.title}>{Name}</Text>
            <TouchableOpacity
              onPress={() => {
                  setHouseHoldId(Id);
                  setHouseHoldName(Name);
                  setEditHouseholdNameModalVisibility(!editHouseholdNameModalVisibility);
                }
              }
            >
              {isowner && <MaterialCommunityIcons name="pencil" size={20} />}
            </TouchableOpacity>
          </View>
          {users.map(({ Name, avatar, IsOwner }, i) => (
            <View key={i} style={styles.textAlign}>
              <Text>{avatar?.Emoji}</Text>
              <Text>{Name}</Text>
              <Text style={styles.descriptionText}>
                {IsOwner ? "(ägare)" : null}
              </Text>
            </View>
          ))}
          <Text style={styles.italicFont}>
            Kod för att gå med i hushållet: {GeneratedCode}
          </Text>
        </Card>

      <Modal
        animationType="slide"
        transparent={true}
        visible={editHouseholdNameModalVisibility}
        onRequestClose={() => {
          setEditHouseholdNameModalVisibility(!editHouseholdNameModalVisibility);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.buttonText}>Ändra namn på hushåll</Text>
            <TextInput
              style={styles.textInputBox}
              value={houseHoldName}
              placeholder="Namn på hushållet"
              onChangeText={(value) => setHouseHoldName(value)}
            />
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.buttonsContainer}>
              <View style={styles.iconWrapper}>
                <FontAwesome5
                  name="check"
                  style={styles.icon}
                  size={25}
                  onPress={editHouseholdName}
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
    </>
  );
};

export default HouseholdCard;
