import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { Card } from "react-native-paper";
import { TaskData } from "../data/taskData";
import { FC } from "react";

interface Props {
  task: TaskData;
}

const TaskCard: FC<Props> = ({ task }) => {
  return (
    <Card style={styles.Card}>
        <Text style={styles.itemText}>
        <Text>{task.Title}</Text>
        </Text>
    </Card>
  );
};

export default TaskCard;
