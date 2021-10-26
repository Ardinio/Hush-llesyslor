import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { Card } from "react-native-paper";
import { TaskData } from "../data/taskData";
import { FC } from "react";
import BadgeComponent from "./BadgeComponent";

interface Props {
  task: TaskData
}

const TaskCard: FC<Props> = ({ task }) => {
  return (
    <Card style={styles.Card}>
      <View style={styles.CardContainer}>
      <Text style={styles.itemText}>{task.Title}</Text>
      <BadgeComponent task={task} />
      </View>
    </Card>
  );
};

export default TaskCard;
