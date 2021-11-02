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
import householdReducer from "../household/householdReducer";
import { selectAllHouseholds } from "../household/householdSelectors";
import { RootState } from "../store";

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
