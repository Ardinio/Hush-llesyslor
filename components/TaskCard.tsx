import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { Card } from "react-native-paper";
import { FC } from "react";
import BadgeComponent from "./BadgeComponent";
import { Task } from "../entities/Task";
import { useAppDispatch } from "../store/store";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
 
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
