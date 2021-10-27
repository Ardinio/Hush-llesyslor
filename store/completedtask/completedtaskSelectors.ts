import { PieChartInputData } from '../../components/ChartPie';
import { RootState } from '../store';
import { singleAvatarById } from '../../data/avatars';

export const selectAllCompletedTasks = (state: RootState) => state.completedtask.completedTasks;

export const selectCompletedTasksTotal = (startdate: Date, enddate: Date) => (state: RootState) => {
  const byDate = state.completedtask.completedTasks.filter((x) => { return x.CompleteDate.getTime() > startdate.getTime() && x.CompleteDate.getTime() < enddate.getTime() });
  const pieChartData: PieChartInputData[] = [];
  byDate.forEach((value) => {
    const user = state.user.users.find((x) => x.Id === value.UserId) ?? { Id: '', AccountId: -1, HouseholdId: -1, Name: '', AvatarId: '', IsOwner: false };
    const task = state.task.task.find((x) => x.Id === value.TasksId) ?? { Id: '', HouseholdId: '', Title: '', Description: '', LastCheckDate: new Date(-1), DaysToComplete: -1, EnergyRequired: -1 };
    const avatar = singleAvatarById(user.AvatarId);
    const indexFromPieChartData: number = pieChartData.findIndex((x) => x.avatarId === user.AvatarId);
    if (indexFromPieChartData >= 0) {
      pieChartData[indexFromPieChartData].energy = pieChartData[indexFromPieChartData].energy + task.EnergyRequired;
    }
    else {
      pieChartData.push({ avatarId: user.AvatarId, color: avatar.Color, energy: task.EnergyRequired });
    }
  });
  return pieChartData;
}

export type tasksContainer = {
  taskId: string,
  taskTitle: string,
  pieChartData: PieChartInputData[]
}

export const selectCompletedTasksByTasks = (startdate: Date, enddate: Date) => (state: RootState) => {
  const tasksPieChartsContainer: tasksContainer[] = [];
  const byDate = state.completedtask.completedTasks.filter((x) => { return x.CompleteDate.getTime() > startdate.getTime() && x.CompleteDate.getTime() < enddate.getTime() });
  byDate.forEach((value) => {
    const indexFromContainer: number = tasksPieChartsContainer.findIndex((x) => x.taskId === value.TasksId);
    if (indexFromContainer >= 0) {
      const user = state.user.users.find((x) => x.Id === value.UserId) ?? { Id: '', AccountId: '', HouseholdId: '', Name: '', AvatarId: '', IsOwner: false };
      const task = state.task.task.find((x) => x.Id === value.TasksId) ?? { Id: '', HouseholdId: '', Title: '', Description: '', LastCheckDate: new Date(-1), DaysToComplete: -1, EnergyRequired: -1 };
      const indexFromPieChart: number = tasksPieChartsContainer[indexFromContainer].pieChartData.findIndex((x) => x.avatarId === user.AvatarId);
      if (indexFromPieChart >= 0) {
        tasksPieChartsContainer[indexFromContainer].pieChartData[indexFromPieChart].energy = tasksPieChartsContainer[indexFromContainer].pieChartData[indexFromPieChart].energy + task.EnergyRequired;
      }
      else {
        const avatar = singleAvatarById(user.AvatarId);
        tasksPieChartsContainer[indexFromContainer].pieChartData.push({ avatarId: user.AvatarId, color: avatar.Color, energy: task.EnergyRequired });
      }
    }
    else {
      const pieChartDataToPush: PieChartInputData[] = [];
      const user = state.user.users.find((x) => x.Id === value.UserId) ?? { Id: '', AccountId: '', HouseholdId: '', Name: '', AvatarId: '', IsOwner: false };
      const task = state.task.task.find((x) => x.Id === value.TasksId) ?? { Id: '', HouseholdId: '', Title: '', Description: '', LastCheckDate: new Date(-1), DaysToComplete: -1, EnergyRequired: -1 };
      const avatar = singleAvatarById(user.AvatarId);
      pieChartDataToPush.push({ avatarId: user.AvatarId, color: avatar.Color, energy: task.EnergyRequired });
      tasksPieChartsContainer.push({ taskId: value.TasksId, taskTitle: task.Title, pieChartData: pieChartDataToPush });
    }
  });
  return tasksPieChartsContainer;
}
