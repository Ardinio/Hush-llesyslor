import { mockedHousehold } from "../../data/householdData";
import householdReducer from "../household/householdReducer";
import { selectAllHouseholds } from "../household/householdSelectors";
import { RootState } from "../store";

export const selectAllTasks = (state: RootState) => state.task.task;

export const selectTaskById = (Id?: string) => (state: RootState) => 
  state.task.task.find(t => t.Id === Id)

export const selectTaskByTitle = (state: RootState) => {
  const selectedTask = state.task.task.find(t => 
    t.Title);
  return selectedTask;
}

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
