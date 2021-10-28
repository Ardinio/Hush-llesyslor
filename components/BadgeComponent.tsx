import * as React from "react";
import { FC } from "react";
import { Badge } from "react-native-paper";
import { Task } from "../entities/Task";
import { styles } from "../styles/Styles";

interface Props {
  task: Task;
}

const BadgeComponent = ({ task }: Props) => (
  <Badge style={styles.itemText}>{task.recurringInDays}</Badge>
);

export default BadgeComponent;
