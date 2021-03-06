import * as React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Styles";
import { Card } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectTasksOnActiveHousehold } from "../store/task/taskSelectors";
import { useState } from "react";
import Button from "./Button";
import { DeleteTask } from "../store/task/taskActions";
import { selectIsAdmin } from "../store/user/userSelectors";
import { AddCompletedTask } from "../store/completedtask/completedtaskActions";
import nextId from "react-id-generator";
import { selectCurrentUser } from "../store/user/userSelectors";
import { selectCompletedCurrentDateByUser } from "../store/completedtask/completedtaskSelectors";
import EditChoreModul from "./EditChoreModul";

const TaskCard = ({}) => {
  const isAdmin = useAppSelector(selectIsAdmin);
  const tasks = useAppSelector(selectTasksOnActiveHousehold);
  const currentUser = useAppSelector(selectCurrentUser);
  const completed = useAppSelector(selectCompletedCurrentDateByUser);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");
  const [userId, setUserId] = useState<string>(currentUser?.Id ?? "");

  const setCompletedTask = () => {
    const exists = completed.findIndex((x) => x.userId === currentUser?.Id && x.taskid === selectedTaskId);
    if (exists === -1) {
      dispatch(
        AddCompletedTask({
          Id: nextId(),
          TasksId: selectedTaskId,
          UserId: userId,
          CompleteDate: new Date()
        })
      );
      setModalVisible(false);
    }
  };

  const onDelete = (selectedTaskId: string) => {
    dispatch(
      DeleteTask({
        Id: selectedTaskId,
        HouseholdId: "",
        Title: "",
        Description: "",
        recurringInDays: 0,
        EnergyRequired: 0
      })
    );
  };

  return (
    <View style={styles.Card}>
      {tasks.map(
        ({ taskId, taskTitle, taskDescription, daysLeft, avatars }, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              setModalVisible(true), setSelectedTitle(taskTitle);
              setSelectedDescription(taskDescription);
              setSelectedTaskId(taskId);
            }}
          >
            <Card>
              <View style={styles.CardContainer}>
                <Text style={styles.itemText}>{taskTitle}</Text>
                <View style={styles.CardItem}>
                  {avatars.length > 0 ? (
                    avatars.map((avatar, i) => <Text key={i}>{avatar}</Text>)
                  ) : daysLeft !== undefined && daysLeft < 0 ? (
                    <Text style={styles.textBad}>{daysLeft}</Text>
                  ) : (
                    <Text style={styles.textOk}>{daysLeft}</Text>
                  )}
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        )
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
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
            </View>

            <View>
              <View style={[styles.buttonsContainer, styles.marginTop]}>
                <Button
                  onPress={() => {
                    setSelectedTaskId;
                    setCompletedTask();
                  }}
                  buttonTitle="F??rdig"
                  btnType="check"
                />
                <View>
                  <Button
                    onPress={() => setModalVisible(!modalVisible)}
                    buttonTitle="St??ng"
                    btnType="window-close"
                  />
                </View>
              </View>
              <View style={[styles.buttonsContainer, styles.marginTop]}>
                <EditChoreModul
                  onPress={() => setModalVisible(!modalVisible)}
                  selectedTaskId={selectedTaskId}
                />
                <View style={[styles.marginTop2]}>
                  {isAdmin && (
                    <Button
                      onPress={() => {
                        onDelete(selectedTaskId);
                        setModalVisible(!modalVisible);
                      }}
                      buttonTitle="Radera"
                      btnType="trash-alt"
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskCard;
