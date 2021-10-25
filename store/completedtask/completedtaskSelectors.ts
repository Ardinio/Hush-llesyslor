import { PieChartInputData } from '../../components/ChartPie';
import { RootState } from '../store';
import { singleAvatarById } from '../../data/avatars';

export const selectAllCompletedTasks = (state: RootState) => state.completedtask.AllCompletedTasks;
export const selectCompletedTasksTotalByDate = (startdate: Date, enddate: Date) => (state: RootState) => {
  const byDate = state.completedtask.AllCompletedTasks.filter((x) => { return x.CompleteDate.getTime() > startdate.getTime() && x.CompleteDate.getTime() < enddate.getTime() });
  const pieChartArray: PieChartInputData[] = [];
  byDate.forEach((value) => {
    const user = state.user.AllUsers.find((x) => x.Id === value.UserId) ?? { Id: -1, AccountId: -1, HouseholdId: -1, Name: '', AvatarId: -1, IsOwner: false };
    const task = state.task.AllTasks.find((x) => x.Id === value.TasksId) ?? { Id: -1, HouseholdId: -1, Title: '', Description: '', LastCheckDate: new Date(-1), DaysToComplete: -1, EnergyRequired: -1 };
    const avatar = singleAvatarById(user.AvatarId);
    const returned:number = pieChartArray.findIndex((x) => x.avatarId === user.AvatarId);
    if (returned >= 0) {
      pieChartArray[returned].energy = pieChartArray[returned].energy + task.EnergyRequired;
    }
    else {
      const pieObject: PieChartInputData = { avatarId: user.AvatarId, color: avatar.Color, energy: task.EnergyRequired }
      pieChartArray.push(pieObject);
    }
  });
  return pieChartArray;
}

export type containerArray = {
  TaskId: number,
  pieChartArray: PieChartInputData[]
}

export const selectCompletedTasksByTask = (startdate: Date, enddate: Date) => (state: RootState) => {
  console.log('startdate: ', startdate.getTime(), ' enddate: ', enddate.getTime());
  const arrayContainer: containerArray[] = [];
  const byDate = state.completedtask.AllCompletedTasks.filter((x) => { return x.CompleteDate.getTime() > startdate.getTime() && x.CompleteDate.getTime() < enddate.getTime() });
  byDate.forEach((value) => {
    const indexFromContainer: number = arrayContainer.findIndex((x) => x.TaskId === value.TasksId);
    if (indexFromContainer >= 0) {
      const user = state.user.AllUsers.find((x) => x.Id === value.UserId) ?? { Id: -1, AccountId: -1, HouseholdId: -1, Name: '', AvatarId: -1, IsOwner: false };
      const task = state.task.AllTasks.find((x) => x.Id === value.TasksId) ?? { Id: -1, HouseholdId: -1, Title: '', Description: '', LastCheckDate: new Date(-1), DaysToComplete: -1, EnergyRequired: -1 };
      const indexFromPieChart: number = arrayContainer[indexFromContainer].pieChartArray.findIndex((x) => x.avatarId === user.AvatarId);
      if (indexFromPieChart >= 0) {
        arrayContainer[indexFromContainer].pieChartArray[indexFromPieChart].energy = arrayContainer[indexFromContainer].pieChartArray[indexFromPieChart].energy + task.EnergyRequired;
      }
      else {
        const avatar = singleAvatarById(user.AvatarId);
        const pieObject: PieChartInputData = { avatarId: user.AvatarId, color: avatar.Color, energy: task.EnergyRequired }
        arrayContainer[indexFromContainer].pieChartArray.push(pieObject);
      }
    }
    else {
      const pieChartArrayToPush: PieChartInputData[] = [];
      const taskId: number = value.TasksId;
      const user = state.user.AllUsers.find((x) => x.Id === value.UserId) ?? { Id: -1, AccountId: -1, HouseholdId: -1, Name: '', AvatarId: -1, IsOwner: false };
      const task = state.task.AllTasks.find((x) => x.Id === value.TasksId) ?? { Id: -1, HouseholdId: -1, Title: '', Description: '', LastCheckDate: new Date(-1), DaysToComplete: -1, EnergyRequired: -1 };
      const avatar = singleAvatarById(user.AvatarId);
      const pieObject: PieChartInputData = { avatarId: user.AvatarId, color: avatar.Color, energy: task.EnergyRequired }
      pieChartArrayToPush.push(pieObject);
      const object2: containerArray = {TaskId: taskId, pieChartArray: pieChartArrayToPush}
      arrayContainer.push(object2)
    }
  });
  return arrayContainer;
}
