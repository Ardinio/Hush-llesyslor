import { CompletedTask } from '../../entities/CompletedTask';

export interface CompletedTaskState {
  AllCompletedTasks: CompletedTask[];
}

export const initialState: CompletedTaskState = {
  AllCompletedTasks: []
}
