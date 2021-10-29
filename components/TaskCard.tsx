import * as React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Styles";
import { Badge, Card } from "react-native-paper";
import { useAppSelector } from "../store/store";
import { selectTasksOnActiveHousehold } from "../store/task/taskSelectors";
import { useState } from "react";
import Button from "./Button";

const TaskCard = ({}) => {
  const tasks = useAppSelector(selectTasksOnActiveHousehold);
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = React.useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <View style={styles.Card}>
      {tasks.map(({ Title, recurringInDays, Description }, i) => (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true), setSelectedTitle(Title);
            setSelectedDescription(Description);
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
