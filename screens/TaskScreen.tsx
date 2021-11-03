import * as React from "react";
import { View, Text, Alert, FlatList, Modal, ScrollView } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import TaskCard from "../components/TaskCard";
import { mockedTasks } from "../data/taskData";
import { TouchableHighlight as TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import AddChoreModul from "../components/AddChoreModul";
import EditChoreModul from "../components/EditChoreModul";
import { SafeAreaProvider } from "react-native-safe-area-context";


function TaskScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = React.useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <View style={styles.container}>
      {/* <FlatList
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
      /> */}
      <ScrollView>
      <TaskCard />
      </ScrollView>
      <View style={styles.buttonsContainer}>
          <AddChoreModul />
          <EditChoreModul />
      </View>
    </View>
  );
}

export default TaskScreen;
