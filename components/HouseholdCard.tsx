import * as React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View, Modal, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { AllAvatars } from "../data/avatars";
import { useAppSelector, useAppDispatch } from "../store/store";
import { styles } from "../styles/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { selectHouseholdsWithUsers } from "../store/household/householdSelectors";
import { EditHousehold } from "../store/household/householdActions";
import { Household } from '../entities/Household';

const HouseholdCard = ({}) => {
  const households = useAppSelector(selectHouseholdsWithUsers);
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
      const householdsClean: Household = households.map((x) => { return { Id: x.Id, Name: x.Name, GeneratedCode: x.GeneratedCode }}).find((y) => y.Id === houseHoldId) ?? { Id: '', Name: '', GeneratedCode: '' };
      const householdWithNewName: Household = { ...householdsClean, Name: houseHoldName ?? "" };
      dispatch(EditHousehold(householdWithNewName));
      closeModal();
    }
  };

  return (
    //TODO: Check CSS to reuse several classes
    <View style={styles.container2}>
      {households.map(({ Id, Name, users, GeneratedCode }, i) => (
        <Card key={i} style={styles.Card}>
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
              <MaterialCommunityIcons name="pencil" size={20} />
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
      ))}

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
    </View>
  );
};

export default HouseholdCard;
