import { mockedCompletedTask } from '../../data/completedTaskData';
import { CompletedTask } from '../../entities/CompletedTask';

export interface CompletedTaskState {
  completedTasks: CompletedTask[];
}

export const initialState: CompletedTaskState = {
    completedTasks: mockedCompletedTask
};
