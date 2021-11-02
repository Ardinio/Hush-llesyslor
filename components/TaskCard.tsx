import * as React from "react";
import { View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import { styles } from "../styles/Styles";
import { Badge, Card } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectTasksOnActiveHousehold } from "../store/task/taskSelectors";
import { useState } from "react";
import Button from "./Button";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { DeleteTask } from "../store/task/taskActions";
import { Household } from "../entities/Household";
import { Task } from "../entities/Task";
import { DefaultRootState, useSelector } from "react-redux";
import { AddHousehold } from "../store/household/householdActions";

const TaskCard = ({ }) => {
  const tasks = useAppSelector(selectTasksOnActiveHousehold);
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = React.useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [taskId, setTaskId] = useState<string>("");
  
  const dispatch = useAppDispatch();

  const onDelete = (taskId: string) => {
      dispatch(
        DeleteTask({
          Id: taskId,
          HouseholdId: '',
          Title: '',
          Description: '',
          recurringInDays: 0,
          EnergyRequired: 0 }))
    }

  return (
    <View style={styles.Card}>
      {tasks.map(({ Title, recurringInDays, Description, Id}, i) => (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true), 
            setSelectedTitle(Title);
            setSelectedDescription(Description)
            setTaskId(Id);
          }}
        >
          <Card key={i}>
            <View style={styles.CardContainer}>
              <Text style={styles.itemText}>{Title}</Text>
              <Badge>{recurringInDays}</Badge>
            </View>
          </Card>
        </TouchableOpacity>
      ))}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView2}>
            <View>
              <View>
                <Text style={styles.itemText}>Titel:</Text>
                <View style={styles.innerContainer}>
                  <Text style={styles.innerContainerText}>{selectedTitle}</Text>
                </View>
              </View>

              <View style={styles.marginTop}>
                <Text style={styles.itemText}>Beskrivning:</Text>
                <View style={styles.innerContainer}>
                  <Text style={styles.innerContainerText}>
                    {selectedDescription}
                  </Text>
                </View>
              </View>
              {/* TODO: Bestämma med gruppen om det ska vara en checkbox eller knapp 
              kommenterat bort checkbox.*/}
              {/*
            <Text style={styles.marginTop}>Färdig:</Text>
              <Checkbox.Android
                color={"green"}
                status={complete ? "checked" : "unchecked"}
                onPress={() => {
                  setComplete(!complete);
                }}
              ></Checkbox.Android> */}
            </View>

            <View style={styles.marginTop}>
              <Button
                onPress={() => {
                  setComplete(!complete);
                }}
                buttonTitle="Färdig"
                btnType="check"
              />
              <View style={styles.marginTop}>
                <Button
                  onPress={() => setModalVisible(!modalVisible)}
                  buttonTitle="Stäng"
                  btnType="window-close"
                />
                {/* <Button
                  onPress={onDelete}
                  buttonTitle="Radera"
                  btnType="window-close"
                /> */}
              </View>
              <View style={styles.marginTop}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="delete" size={24} color="black" onPress={() => onDelete(taskId)} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    // <Card style={styles.Card}>
    //   <View style={styles.CardContainer}>
    //     <Text style={styles.itemText}>{task.Title}</Text>
    //     <BadgeComponent task={task} />
    //   </View>
    // </Card>
  );

};

export default TaskCard;
