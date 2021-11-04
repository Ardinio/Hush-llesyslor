import * as React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "../styles/Styles";
import TaskCard from "../components/TaskCard";
import AddChoreModul from "../components/AddChoreModul";

function TaskScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TaskCard />
      </ScrollView>
      <AddChoreModul />
    </View>
  );
}

export default TaskScreen;
