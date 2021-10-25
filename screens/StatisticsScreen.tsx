import * as React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useAppSelector, useAppDispatch } from '../store/store';
import { AddHousehold } from '../store/household/householdActions';
import { AddUser } from '../store/user/userActions';
import { AddTask } from '../store/task/taskActions';
import { selectCompletedTasksTotalByDate, selectCompletedTasksByTask } from '../store/completedtask/completedtaskSelectors';
import { AddCompletedTask } from '../store/completedtask/completedtaskActions';
import { ChartPie } from '../components/ChartPie';
import { styles } from "../styles/Styles";

function StatisticsScreen() {
  const dispatch = useAppDispatch();

  const currentDate: Date = new Date();
  const lastWeek: Date = new Date(+currentDate);
  lastWeek.setDate(lastWeek.getDate() - 7);
  const allCompletedTasksByDateTotal = useAppSelector(selectCompletedTasksTotalByDate(lastWeek, currentDate));
  const allCompletedTasksByDateByTask = useAppSelector(selectCompletedTasksByTask(lastWeek, currentDate));

  const handleAddMock = () => {
    dispatch(AddHousehold({Id: 1, Name: 'household 1', GeneratedCode: '123'}));
    dispatch(AddHousehold({Id: 2, Name: 'household 2', GeneratedCode: '456'}));
    dispatch(AddUser({Id: 1, AccountId: 1, HouseholdId: 1, Name: 'user 1', AvatarId: 2, IsOwner: true}));
    dispatch(AddUser({Id: 2, AccountId: 2, HouseholdId: 1, Name: 'user 2', AvatarId: 3, IsOwner: false}));
    dispatch(AddUser({Id: 3, AccountId: 3, HouseholdId: 1, Name: 'user 3', AvatarId: 4, IsOwner: false}));
    dispatch(AddUser({Id: 4, AccountId: 4, HouseholdId: 2, Name: 'user 4', AvatarId: 5, IsOwner: true}));
    const date:Date = new Date();
    dispatch(AddTask({Id: 1, HouseholdId: 1, Title: 'task 1', Description: 'description 1', LastCheckDate: date, DaysToComplete: 3, EnergyRequired: 3})); 
    dispatch(AddTask({Id: 2, HouseholdId: 1, Title: 'task 2', Description: 'description 2', LastCheckDate: date, DaysToComplete: 2, EnergyRequired: 2})); 
    dispatch(AddTask({Id: 3, HouseholdId: 1, Title: 'task 3', Description: 'description 3', LastCheckDate: date, DaysToComplete: 1, EnergyRequired: 1})); 
    const date1:Date = new Date('2021-10-15T12:00:00');
    const date2:Date = new Date('2021-10-23T12:00:00');
    const date3:Date = new Date('2021-10-21T12:00:00');
    const date4:Date = new Date('2021-10-22T12:00:00');
    dispatch(AddCompletedTask({Id: 1, TasksId: 1, UserId: 1, CompleteDate: date1}));
    dispatch(AddCompletedTask({Id: 2, TasksId: 2, UserId: 2, CompleteDate: date2}));
    dispatch(AddCompletedTask({Id: 3, TasksId: 3, UserId: 3, CompleteDate: date3}));
    dispatch(AddCompletedTask({Id: 4, TasksId: 3, UserId: 3, CompleteDate: date4}));
    dispatch(AddCompletedTask({Id: 5, TasksId: 2, UserId: 3, CompleteDate: date4}));
    dispatch(AddCompletedTask({Id: 6, TasksId: 3, UserId: 4, CompleteDate: date4}));
    dispatch(AddCompletedTask({Id: 7, TasksId: 1, UserId: 2, CompleteDate: date4}));
    dispatch(AddCompletedTask({Id: 8, TasksId: 1, UserId: 1, CompleteDate: date4}));
  }

  return (
    <ScrollView>
      <View style={styles.statisticsScreenContainer}>
        <Text>Statistics Screen</Text>
        <Button title="Mock add" onPress={handleAddMock}></Button>
        <Text>Total</Text>
        <ChartPie data={allCompletedTasksByDateTotal} />
          <View style={styles.pieChartContainer}>
        {allCompletedTasksByDateByTask.map((value) => (
          <View key={value.taskId} style={styles.pieShartTaskContainer}>
            <Text style={styles.pieShartTaskContainerText}>Task id: {value.taskId}</Text>
            <ChartPie data={value.pieChartData} />
          </View>
        ))}
          </View>
      </View>
    </ScrollView>
  );
}

export default StatisticsScreen;
