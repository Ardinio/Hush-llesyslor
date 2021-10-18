import { Tasks } from '../../entities/Tasks';

export interface TaskState {
  AllTasks: Tasks[];
}

export const initialState: TaskState = {
  AllTasks: []
}
