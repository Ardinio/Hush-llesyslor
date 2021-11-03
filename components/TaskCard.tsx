import * as React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Styles";
import { Badge, Card } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectTasksOnActiveHousehold } from "../store/task/taskSelectors";
import { useState } from "react";
import Button from "./Button";
import { AddCompletedTask } from "../store/completedtask/completedtaskActions";
import nextId from "react-id-generator";
import { selectCurrentUser } from "../store/user/userSelectors";

const TaskCard = ({}) => {
  const tasks = useAppSelector(selectTasksOnActiveHousehold);
  const currentUser = useAppSelector(selectCurrentUser);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");
  const [userId, setUserId] = useState<any>();

  const setCompletedTask = () => {
    dispatch(
      AddCompletedTask({
        Id: nextId(),
        TasksId: selectedTaskId,
        UserId: userId,
        CompleteDate: new Date(),
      })
    );
  };

  return (
    <View style={styles.Card}>
      {tasks.map(({ Title, recurringInDays, Description, Id }, i) => (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true), setSelectedTitle(Title);
            setSelectedDescription(Description);
            setSelectedTaskId(Id);
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

            <View style={[styles.buttonsContainer, styles.marginTop]}>
              <Button
                onPress={() => {
                  setCompletedTask(),
                    setSelectedTaskId,
                    setUserId(currentUser?.AccountId);
                }}
                buttonTitle="Färdig"
                btnType="check"
              />
              <View>
                <Button
                  onPress={() => setModalVisible(!modalVisible)}
                  buttonTitle="Stäng"
                  btnType="window-close"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskCard;
