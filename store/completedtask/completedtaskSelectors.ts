import { PieChartInputData } from '../../components/ChartPie';
import { RootState } from '../store';
import { singleAvatarById } from '../../data/avatars';
import { CompletedTask } from '../../entities/CompletedTask';

function cleanDate(date: Date): Date {
  const newDate: Date = new Date(+date);
  newDate.setUTCHours(0, 0, 0, 0);
  return newDate;
}

export const selectCompletedCurrentDateByUser = (state: RootState) => {
  const accountId = state.account.account.Id;
  const activeHoseHoldId = state.household.activeHouseholdId;
  const currentUser = state.user.users.find(u =>
    u.AccountId === accountId && u.HouseholdId === activeHoseHoldId) ?? { Id: '', AccountId: '', HouseholdId: '', Name: '', AvatarId: '', IsOwner: false };
  const date = new Date();
  return state.completedtask.completedTasks.filter((x) => (x.UserId === currentUser.Id && cleanDate(x.CompleteDate).getTime() === cleanDate(date).getTime())).map((y) => ({ userId: y.UserId, taskid: y.TasksId }));
}

export const selectCompletedTasksTotal = (startdate: Date, enddate: Date) => (state: RootState) => {
  const usersBasedOnHousehold = state.user.users.filter((x) => x.HouseholdId === state.household.activeHouseholdId).map((x) => x.Id);
  const completedtaskContainer: CompletedTask[] = [];

  state.completedtask.completedTasks.forEach((x) => {
    usersBasedOnHousehold.forEach((y) => {
      if (x.UserId === y) {
        completedtaskContainer.push(x);
      }
    })
  })
  const byDate = completedtaskContainer.filter((x) => { return x.CompleteDate.getTime() > startdate.getTime() && x.CompleteDate.getTime() < enddate.getTime() });
  const pieChartData: PieChartInputData[] = [];

  byDate.forEach((value) => {
    const user = state.user.users.find((x) => x.Id === value.UserId) ?? { Id: '', AccountId: '', HouseholdId: '', Name: '', AvatarId: '', IsOwner: false };
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

type tasksContainer = {
  taskId: string,
  taskTitle: string,
  pieChartData: PieChartInputData[]
}

export const selectCompletedTasksByTasks = (startdate: Date, enddate: Date) => (state: RootState) => {
  const usersBasedOnHousehold = state.user.users.filter((x) => x.HouseholdId === state.household.activeHouseholdId).map((x) => x.Id);
  const completedtaskContainer: CompletedTask[] = [];

  state.completedtask.completedTasks.forEach((x) => {
    usersBasedOnHousehold.forEach((y) => {
      if (x.UserId === y) {
        completedtaskContainer.push(x);
      }
    })
  })
  const byDate = completedtaskContainer.filter((x) => { return x.CompleteDate.getTime() > startdate.getTime() && x.CompleteDate.getTime() < enddate.getTime() });
  const tasksPieChartsContainer: tasksContainer[] = [];

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
