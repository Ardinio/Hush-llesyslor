import * as React from "react";
import { View, Text, Modal, TextInput } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { useState } from "react";
import RepeatCarousel from "./RepeatCarousel";
import ValueCarousel from "./ValueCarousel";
import nextId from "react-id-generator";
import { useAppDispatch, useAppSelector } from "../store/store";
import { AddTask } from "../store/task/taskActions";
import { selectActiveHousehold } from "../store/household/householdSelectors";
import { selectIsAdmin } from "../store/user/userSelectors";

function AddChoreModul() {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recurringInDays, setRecurringInDays] = useState<number>();
  const [energyRequired, setEnergyRequired] = useState<number>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const dispatch = useAppDispatch();
  const activeHousehold = useAppSelector(selectActiveHousehold);
  const isAdmin = useAppSelector(selectIsAdmin);

  const closeModal = () => {
    setErrorMsg("");
    setTitle("");
    setDescription("");
    setModalVisible(false);
  };

  const addNewTask = () => {
    if (!title || !description || !recurringInDays || !energyRequired)
      return setErrorMsg("Du måste fylla i alla fält");

    dispatch(
      AddTask({
        Id: nextId(),
        HouseholdId: activeHousehold?.Id!,
        Title: title,
        Description: description,
        recurringInDays: recurringInDays!,
        EnergyRequired: energyRequired!,
      })
    );
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text>Skapa en ny syssla</Text>
            <View>
              <View>
                <View style={[styles.innerContainer, styles.marginTop]}>
                  <TextInput
                    style={styles.textInputBox}
                    placeholder="Titel"
                    placeholderTextColor="grey"
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                  />
                  <Text style={styles.errorText}>{errorMsg}</Text>

                  <Text style={styles.innerContainerText}></Text>
                </View>
              </View>

              <View style={styles.marginTop}>
                <View style={styles.innerContainer}>
                  <TextInput
                    style={styles.textInputBox}
                    placeholder="Beskrivning"
                    placeholderTextColor="grey"
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                  />
                  <Text style={styles.errorText}>{errorMsg}</Text>
                </View>
                <RepeatCarousel
                  onChangeText={(value) => setRecurringInDays(value)}
                />
                <ValueCarousel
                  onChangeText={(value) => setEnergyRequired(value)}
                />
              </View>
            </View>

            <View style={[styles.buttonsContainer, styles.marginTop]}>
              <Button onPress={addNewTask} buttonTitle="Spara" btnType="plus" />

              <Button
                onPress={() => setModalVisible(false)}
                buttonTitle="Stäng"
                btnType="window-close"
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.marginTop}>
        {isAdmin && (
          <Button
            onPress={() => setModalVisible(!modalVisible)}
            buttonTitle="Lägg till"
            btnType="plus"
          />
        )}
      </View>
    </View>
  );
}

export default AddChoreModul;
