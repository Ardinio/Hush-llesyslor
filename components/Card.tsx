import * as React from "react";
import { View } from 'react-native';

import { FC } from "react";
import { Card, Paragraph } from "react-native-paper";
import { TaskData } from "../data/taskData";

interface Props {
  task: TaskData;
}

const TaskCard: FC<Props> = (task) => {
  const description = task.task.Description

  return (
    <View>
      <Card>
        <Paragraph>{description}</Paragraph>
      </Card>
    </View>
  )
}

export default TaskCard;
