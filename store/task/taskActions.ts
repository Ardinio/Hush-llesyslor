import { Tasks } from '../../entities/Tasks';
import { AppThunk } from '../store';

export interface AddTaskAction {
  type: 'task/addTask';
  payload: Tasks;
}

export type TaskActions = AddTaskAction;

export const AddTask = (task: Tasks): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'task/addTask', payload: task })
  }
