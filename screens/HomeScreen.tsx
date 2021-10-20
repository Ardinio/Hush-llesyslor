import * as React from "react";
import {
  View,
  Text,
  Alert,
  FlatList,
  Modal,
  Button as ReactNativeButton,
} from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { GenericScreenProps } from "../navigation/AppStack";
import { useAppSelector, useAppDispatch } from "../store/store";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { AddHousehold } from "../store/household/householdActions";
import TaskCard from "../components/TaskCard";
import { tasks } from "../data/taskData";
import { TouchableHighlight as TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Checkbox } from "react-native-paper";

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleAdd = () => {
    dispatch(
      AddHousehold({ Id: 1, Name: "household 1", GeneratedCode: "123" })
    );
    Alert.alert("Added new household");
  };

  const handlePrint = () => {
    Alert.alert("Print (see console)");
    console.log("allHouseholds: ", allHouseholds);
  };
  return (
    <View style={styles.container}>
      {/* Detta ska till taskScreen */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text>Titel:</Text>
            <View style={styles.innerContainer}></View>
            <Text>Beskrivning:</Text>
            <Text></Text>
            <View style={styles.innerContainer}>
              <Text></Text>
            </View>
            <Text>Färdig:</Text>
            <View>
              <Checkbox.Android
                color={"green"}
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              ></Checkbox.Android>
            </View>

            <View style={styles.buttonContainer}>
              <ReactNativeButton
                onPress={() => setModalVisible(!modalVisible)}
                title="Stäng"
                color="black"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={tasks}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            underlayColor="none"
          >
            <TaskCard task={item} />
          </TouchableOpacity>
        )}
      />

      {/*  */}

      <Text>Home Screen</Text>
      <Button
        buttonTitle="Household"
        btnType="plus-circle"
        onPress={handleAdd}
      />
      <Button buttonTitle="Print" btnType="print" onPress={handlePrint} />
    </View>
  );
}

export default HomeScreen;
