import { TasksUsers } from '../../entities/TasksUsers';

export interface TaskUserState {
  AllTasksUsers: TasksUsers[];
}

export const initialState: TaskUserState = {
  AllTasksUsers: []
}
