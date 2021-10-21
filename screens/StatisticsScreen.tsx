import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useAppSelector, useAppDispatch } from '../store/store';
import { selectAllHouseholds } from '../store/household/householdSelectors';
import { AddHousehold } from '../store/household/householdActions';
import { selectAllUsers, selectUserById } from '../store/user/userSelectors';
import { AddUser } from '../store/user/userActions';
import { selectAllTasks } from '../store/task/taskSelectors';
import { AddTask } from '../store/task/taskActions';
import { selectAllCompletedTasks, selectCompletedTasksByDate } from '../store/completedtask/completedtaskSelectors';
import { AddCompletedTask } from '../store/completedtask/completedtaskActions';
import { ChartPie, PieChartInputData } from '../components/ChartPie';
import { singleAvatarById } from '../data/avatars';
import { singleUserById, singleTaskById } from '../data/selectSingleObject';

function StatisticsScreen() {
  const dispatch = useAppDispatch();
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const allUsers = useAppSelector(selectAllUsers);
  const allTasks = useAppSelector(selectAllTasks);
  const allCompletedTasks = useAppSelector(selectAllCompletedTasks);

  const currentDate: Date = new Date();
  console.log('currentDate: ', currentDate);        // Debug.
  const lastWeek: Date = new Date(+currentDate);
  lastWeek.setDate(lastWeek.getDate() - 7);
  console.log('lastWeek: ', lastWeek);              // Debug.
  const allCompletedTasksByDate = useAppSelector(selectCompletedTasksByDate(lastWeek, currentDate));

  // const chartPieData:PieChartInputData[] = [{avatarId: 7, color: '#00ff00', energy: 10}, {avatarId: 2, color: '#ff0000', energy: 3}, {avatarId: 3, color: '#0000ff', energy: 5}];

  const totalChartData = ():PieChartInputData[] => {
    let chartPieData:PieChartInputData[] = [];
    // console.log('allCompletedTasksByDate: ', allCompletedTasksByDate);            // Debug.
    allCompletedTasksByDate.forEach((element) => {
      console.log('allCompletedTasksByDate element: ', element);
      const user = singleUserById(allUsers, element.UserId);
      const avatar = singleAvatarById(user.AvatarId);
      const task = singleTaskById(allTasks, element.UserId);
      const pieObject: PieChartInputData = {avatarId: user.AvatarId, color: avatar.Color, energy: task.EnergyRequired}
      chartPieData.push(pieObject);
      if(chartPieData.length > 0) {
        chartPieData.forEach((element2) => {
          if(element2.avatarId !== avatar.Id) {
            console.log('user: ', user, ' avatar: ', avatar);
          }
          else
            console.log('SAME')
        })
      }
    });
    console.log('chartPieData: ', chartPieData);            // Debug
    return chartPieData;
  }

  const handleAddMock = () => {
    dispatch(AddHousehold({Id: 1, Name: 'household 1', GeneratedCode: '123'}));
    dispatch(AddHousehold({Id: 2, Name: 'household 2', GeneratedCode: '456'}));
    dispatch(AddUser({Id: 1, AccountId: 1, HouseholdId: 1, Name: 'user 1', AvatarId: 2, IsOwner: true}));
    dispatch(AddUser({Id: 2, AccountId: 2, HouseholdId: 1, Name: 'user 2', AvatarId: 3, IsOwner: false}));
    dispatch(AddUser({Id: 3, AccountId: 3, HouseholdId: 1, Name: 'user 3', AvatarId: 4, IsOwner: false}));
    dispatch(AddUser({Id: 4, AccountId: 4, HouseholdId: 2, Name: 'user 4', AvatarId: 5, IsOwner: true}));
    const date:Date = new Date();
    const date1:Date = new Date('2021-10-15T12:00:00');
    const date2:Date = new Date('2021-10-01T12:00:00');
    const date3:Date = new Date('2021-10-19T12:00:00');
    const date4:Date = new Date('2021-10-18T12:00:00');
    dispatch(AddTask({Id: 1, HouseholdId: 1, Title: 'task 1', Description: 'description 1', LastCheckDate: date, DaysToComplete: 3, EnergyRequired: 3})); 
    dispatch(AddTask({Id: 2, HouseholdId: 1, Title: 'task 2', Description: 'description 2', LastCheckDate: date, DaysToComplete: 2, EnergyRequired: 2})); 
    dispatch(AddTask({Id: 3, HouseholdId: 1, Title: 'task 3', Description: 'description 3', LastCheckDate: date, DaysToComplete: 1, EnergyRequired: 1})); 
    dispatch(AddCompletedTask({Id: 1, TasksId: 1, UserId: 1, CompleteDate: date1}));
    dispatch(AddCompletedTask({Id: 2, TasksId: 2, UserId: 2, CompleteDate: date2}));
    dispatch(AddCompletedTask({Id: 3, TasksId: 3, UserId: 3, CompleteDate: date3}));
    dispatch(AddCompletedTask({Id: 4, TasksId: 3, UserId: 3, CompleteDate: date4}));
    dispatch(AddCompletedTask({Id: 4, TasksId: 2, UserId: 3, CompleteDate: date4}));
  }

  const handlePrint = () => {
    // Alert.alert('Print (see console)');
    // console.log('allHouseholds: ', allHouseholds);
    // console.log('allUsers: ', allUsers);
    // console.log('allTasks: ', allTasks);
    // console.log('allCompletedTasks: ', allCompletedTasks);
    // console.log('allCompletedTasksByDate: ', allCompletedTasksByDate);
    // allCompletedTasksByDate.forEach((element, index, array) => {console.log('element: ', element, ' index: ', index)});
    totalChartData();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics Screen</Text>
      <Button title="Mock add" onPress={handleAddMock}></Button>
      <Button title="Mock print" onPress={handlePrint}></Button>
      <ChartPie data={totalChartData()} />
    </View>
  );
}

export default StatisticsScreen;
