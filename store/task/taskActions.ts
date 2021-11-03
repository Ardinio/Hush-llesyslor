import { Task } from '../../entities/Task';
import { AppThunk } from '../store';

export interface AddTaskAction {
  type: 'task/addTask';
  payload: Task;
}

export type TaskActions = AddTaskAction;

export const AddTask = (task: Task): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'task/addTask', payload: task })
  }

