import * as React from 'react';
import { FC } from 'react';
import { Badge } from 'react-native-paper';
import { TaskData } from '../data/taskData';
import { styles } from '../styles/Styles';

interface Props {
  task: TaskData;
}

const BadgeComponent: FC<Props> = ({ task }) => (
    <Badge style={styles.itemText}>{task.DaysToComplete}</Badge>
);

export default BadgeComponent;
