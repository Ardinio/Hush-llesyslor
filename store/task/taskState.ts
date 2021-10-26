import { mockedTasks } from '../../data/taskData';
import { Task } from '../../entities/Task';

export interface TaskState {
  task: Task[];
}

export const initialState: TaskState = {
  task: mockedTasks
}
