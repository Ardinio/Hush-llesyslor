import * as React from "react";
import { View, Text, Alert, FlatList, Modal } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import TaskCard from "../components/TaskCard";
import { mockedTasks } from "../data/taskData";
import { TouchableHighlight as TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectActiveTask } from "../store/task/taskSelectors";
import taskReducer from "../store/task/taskReducer";
import { DeleteTask } from "../store/task/taskActions";
import AntDesign from "@expo/vector-icons/build/AntDesign";

function TaskScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = React.useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const activTask = useAppSelector(selectActiveTask);

  // const onDelete = () => {
  //   dispatch(
  //     DeleteTask({
  //      Id: '',

  //     })
  //   )
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={mockedTasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true), setSelectedTitle(item.Title);
              setSelectedDescription(item.Description);
            }}
            underlayColor="none"
          >
            <TaskCard task={item} />
          </TouchableOpacity>
        )}
      />

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
                  btnType="delete"
                /> */}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TaskScreen;
