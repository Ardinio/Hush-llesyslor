import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "../styles/Styles";
import TaskCard from "../components/TaskCard";
import AddChoreModul from "../components/AddChoreModul";

function TaskScreen() {
  return (
    <View style={styles.container}>
      <Text>Sysslor - idag</Text>
      <ScrollView>
        <TaskCard />
      </ScrollView>
      <AddChoreModul />
    </View>
  );
}

export default TaskScreen;
