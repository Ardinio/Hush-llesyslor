import { Task } from '../../entities/Task';
import { AppThunk } from '../store';

export interface AddTaskAction {
  type: 'task/addTask';
  payload: Task;
}

export interface DeleteTaskAction {
  type: 'task/deleteTask';
  payload: Task;
}

export type TaskActions = AddTaskAction | DeleteTaskAction;

export const AddTask = (task: Task): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'task/addTask', payload: task })
  }

  export const DeleteTask = (task: Task): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'task/deleteTask', payload: task })
  }
