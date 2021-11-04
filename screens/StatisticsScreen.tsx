import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAppSelector } from '../store/store';
import { selectCompletedTasksTotal, selectCompletedTasksByTasks } from '../store/completedtask/completedtaskSelectors';
import { ChartPie } from '../components/ChartPie';
import { styles } from "../styles/Styles";

function StatisticsScreen() {
  const currentDate: Date = new Date();
  const lastWeek: Date = new Date(+currentDate);
  lastWeek.setDate(lastWeek.getDate() - 7);
  const allCompletedTasksByDateTotal = useAppSelector(selectCompletedTasksTotal(lastWeek, currentDate));
  const allCompletedTasksByDateByTask = useAppSelector(selectCompletedTasksByTasks(lastWeek, currentDate));

  return (
    <ScrollView>
      <View style={styles.statisticsScreenContainer}>
        <Text>Statistik - vecka</Text>
        <Text>Total</Text>
        <ChartPie data={allCompletedTasksByDateTotal} isBig={true} />
          <View style={styles.pieChartContainer}>
        {allCompletedTasksByDateByTask.map((value) => (
          <View key={value.taskId} style={styles.pieShartTaskContainer}>
            <Text style={styles.pieShartTaskContainerText}>{value.taskTitle}</Text>
            <ChartPie data={value.pieChartData} />
          </View>
        ))}
          </View>
      </View>
    </ScrollView>
  );
}

export default StatisticsScreen;
