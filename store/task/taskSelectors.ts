// import { mockedHousehold } from '../../data/householdData';
// import { RootState } from '../store';

// export const selectAllTasks = (state: RootState) => state.task.task;

// export const selectActiveTask = (state: RootState) =>
//   selectAllTasks(state).find(
//     (t) => t.Id === state.task.activeTaskId
//   );

//   export const selectTasksOnActiveHousehold = (state: RootState) => {
//     return state.task.task.map((task) => {
//       const users = state.user.users.filter(
//         (u) => u.HouseholdId == task.HouseholdId
//       );
//       const currentHousehold = users.map((user) => {
//         const household = mockedHousehold.find((h) => h.Id === user.HouseholdId);
//         return { ...user, household };
//       });
//       const isOwner = state.user.users.find((u) => u.HouseholdId === task.HouseholdId && u.AccountId === state.account.account.Id) ?? {Id: '', AccountId: '', HouseholdId: '', Name: '', AvatarId: '', IsOwner: false} 
//       return { ...task, users: currentHousehold, isowner: isOwner.IsOwner  };
//     });
//   };
import { mockedHousehold } from "../../data/householdData";
import { RootState } from "../store";
import { singleAvatarById } from "../../data/avatars";

export const selectAllTasks = (state: RootState) => state.task.task;

export const selectTaskById = (Id?: string) => (state: RootState) => 
  state.task.task.find(t => t.Id === Id)

export const selectTaskByTitle = (state: RootState) => {
  const selectedTask = state.task.task.find(t => 
    t.Title);
  return selectedTask;
}
export const selectActiveTask = (state: RootState) =>
  selectAllTasks(state).find(
    (t) => t.Id === state.task.activeTaskId
  );

export const selectTasksOnActiveHousehold = (state: RootState) => {
  return state.task.task.filter(t =>
    t.HouseholdId == state.household.activeHouseholdId);
};


export const selectHouseholdTasksWithInfo = (state: RootState) => {
  const tasks = selectTasksOnActiveHousehold(state);
  
  return tasks.map(t => {
    // 1. Hämta alla completed task för t.id och se när den gjordes senast
    // 2. Sortera på datum
    // 3. Hämta ut första completed tasken
    // 4. OM det är idag
    // 4a. Hämta lastCompeletedBy
    // 5. sätt numberOFDaytsSinceComplted
    // 6. Returnera
    return {
      ...t,
      numberOfDaysSinceCompleted: 1,
      lastCompletedBy: ['avatar1', 'avatar2']
    }
  })
}

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
