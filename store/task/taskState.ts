import { Task } from '../../entities/Task';

export interface TaskState {
  AllTasks: Task[];
}

export const initialState: TaskState = {
  AllTasks: []
}
