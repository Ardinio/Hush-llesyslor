import * as React from "react";
import { View, Text, Modal, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { useState } from "react";
import RepeatCarousel from "./RepeatCarousel";
import ValueCarousel from "./ValueCarousel";
import nextId from "react-id-generator";
import { useAppDispatch, useAppSelector } from "../store/store";
import { AddTask as EditTask } from "../store/task/taskActions";
import { selectTaskByTitle } from "../store/task/taskSelectors";

function EditChoreModul() {
  const selectedTask = useAppSelector(selectTaskByTitle);

  const [selectTaskToEdit, setSelectTaskToEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recurringInDays, setRecurringInDays] = useState<number>();
  const [energyRequired, setEnergyRequired] = useState<number>();
  const [errorMsg, setErrorMsg] = React.useState<string>();
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setErrorMsg("");
    setEditTitle("");
    setDescription("");
    setModalVisible(false);
    setEditModalVisible(false);
  };

  const editTask = () => {
    if (!editTitle || !description || !recurringInDays || !energyRequired)
      return setErrorMsg("Du måste fylla i alla fält");
    if (!selectedTask) return setErrorMsg("En syssla med den titlen finns inte")
    dispatch(
      EditTask({
        Id: nextId(),
        HouseholdId: "100",
        Title: editTitle,
        Description: description,
        recurringInDays: recurringInDays!,
        EnergyRequired: energyRequired!,
      })
    );
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectTaskToEdit}
        onRequestClose={() => {
          setSelectTaskToEdit(!selectTaskToEdit);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.buttonText}>Skriv Titlen på sysslan du vill ändra på</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder="Ange Titlen på sysslan"
              value={editTitle}
              onChangeText={(value) => setEditTitle(value)}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.iconWrapper}>
                  <FontAwesome5
                    name="check"
                    style={styles.icon}
                    size={25}
                    onPress={editTask}
                  />
                </View>
                <View style={styles.iconWrapper}>
                  <FontAwesome5
                    name="arrow-circle-down"
                    style={styles.icon}
                    size={25}
                    onPress={!editModalVisible}
                  />
                </View>
              </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={editModalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView2}>
            <Text>Ändra en syssla</Text>
            <View>
              <View>
                <View style={[styles.innerContainer, styles.marginTop]}>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Titel"
                    placeholderTextColor="grey"
                    value={editTitle}
                    onChangeText={(value) => setEditTitle(value)}
                  />
                  <Text style={styles.errorText}>{errorMsg}</Text>

                  <Text style={styles.innerContainerText}></Text>
                </View>
              </View>

              <View style={styles.marginTop}>
                <View style={styles.innerContainer}>
                  <TextInput
                    style={styles.textBox}
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

            <View style={styles.marginTop}>
              <Button
                onPress={editTask}
                buttonTitle="Spara"
                btnType="window-close"
              />
              <View style={styles.marginTop}>
                <Button
                  onPress={() => setModalVisible(false)}
                  buttonTitle="Stäng"
                  btnType="window-close"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => setModalVisible(!selectTaskToEdit)}
        buttonTitle="Ändra"
        btnType="pen"
      />
    </View>
  );
}

export default EditChoreModul;
