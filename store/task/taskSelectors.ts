import { RootState } from '../store';

export const selectAllTasks = (state: RootState) => state.task.task;

export const selectActiveTask = (state: RootState) =>
  selectAllTasks(state).find(
    (t) => t.Id === state.task.activeTaskId
  );

 