import { mockedTasks } from '../../data/taskData';
import { Task } from '../../entities/Task';

export interface TaskState {
  task: Task[];
  activeTaskId: string;
}

export const initialState: TaskState = {
  task: mockedTasks,
  activeTaskId: "1"
}
