import * as React from "react";
import { View, Text, Alert, FlatList, Modal } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import TaskCard from "../components/TaskCard";
import { tasks } from "../data/taskData";
import { TouchableHighlight as TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Checkbox } from "react-native-paper";

function TaskScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = React.useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
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
              <Text style={styles.marginTop}>Färdig:</Text>
              <Checkbox.Android
                color={"green"}
                status={complete ? "checked" : "unchecked"}
                onPress={() => {
                  setComplete(!complete);
                }}
              ></Checkbox.Android>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                buttonTitle="Stäng"
                btnType="window-close"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TaskScreen;
