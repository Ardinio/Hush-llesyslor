import { mockedHousehold } from "../../data/householdData";
import { RootState } from "../store";
import { singleAvatarById } from "../../data/avatars";

export const selectAllTasks = (state: RootState) => state.task.task;

export const selectTasksOnActiveHousehold = (state: RootState) => {
  return state.task.task.map((task) => {
    const users = state.user.users.filter(
      (u) => u.HouseholdId == task.HouseholdId
    );
    const currentHousehold = users.map((user) => {
      const household = mockedHousehold.find((h) => h.Id === user.HouseholdId);
      return { ...user, household };
    });
    return { ...task, users: currentHousehold };
  });
};

type taskContainer = {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  daysLeft?: number;
  avatars?: string[];
};

function cleanDate(date: Date): Date {
  const newDate: Date = new Date(+date);
  newDate.setUTCHours(0, 0, 0, 0);
  return newDate;
}

export const selectTasksOnActiveHouseholdById = (state: RootState) => {
  const tasksHouseholds = state.task.task
    .filter((x) => x.HouseholdId === state.household.activeHouseholdId)
    .map((y) => ({
      taskId: y.Id,
      title: y.Title,
      description: y.Description,
      reccuringInDays: y.recurringInDays,
    }));

  let currentDate: Date = new Date();
  currentDate = cleanDate(currentDate);
  let allDate: taskContainer[] = [];
  let avatars: string[] = [];
  let daysleft: number;

  tasksHouseholds.forEach((task) => {
    state.completedtask.completedTasks.forEach((completed) => {
      if (
        cleanDate(completed.CompleteDate).getTime() === currentDate.getTime() &&
        completed.TasksId === task.taskId
      ) {
        const index = allDate.findIndex((x) => x.taskId === task.taskId);
        const user = state.user.users.find(
          (z) => z.Id === completed.UserId
        ) ?? {
          Id: "",
          AccountId: "",
          HouseholdId: "",
          Name: "",
          AvatarId: "",
          IsOwner: false,
        };
        if (index === -1) {
          avatars.push(singleAvatarById(user.AvatarId).Emoji);
          allDate.push({
            taskId: completed.TasksId,
            taskTitle: task.title,
            taskDescription: task.description,
            avatars: avatars,
          });
        } else
          allDate[index].avatars?.push(singleAvatarById(user.AvatarId).Emoji);
      } else completed.TasksId === task.taskId;
      const index = allDate.findIndex((x) => x.taskId === task.taskId);
      const completedTasksTasksFilter =
        state.completedtask.completedTasks.filter(
          (s) => s.TasksId === task.taskId
        );
      const last = completedTasksTasksFilter.find(
        (k) =>
          k.CompleteDate.getTime() ===
          Math.max(
            ...completedTasksTasksFilter.map((e) => e.CompleteDate.getTime())
          )
      ) ?? { Id: "", TasksId: "", UserId: "", CompleteDate: new Date() };
      const msFromCurrentMinusReccuring: number =
        new Date().getTime() - task.reccuringInDays * 86400000;
      const currentMinusReccuring: Date = new Date(msFromCurrentMinusReccuring);
      const ms: number =
        cleanDate(last.CompleteDate).getTime() -
        currentMinusReccuring.getTime();
      daysleft = Math.ceil(ms / (1000 * 60 * 60 * 24));
      if (index === -1) {
        allDate.push({
          taskId: task.taskId,
          taskTitle: task.title,
          taskDescription: task.description,
          daysLeft: daysleft,
        });
      }
    });
  });
  return allDate;
};
