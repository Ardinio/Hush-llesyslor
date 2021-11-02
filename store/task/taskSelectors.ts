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