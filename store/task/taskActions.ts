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

export interface EditTaskAction {
  type: 'task/editTask';
  payload: Task;
}

export type TaskActions = AddTaskAction | DeleteTaskAction | EditTaskAction;

export const AddTask = (task: Task): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'task/addTask', payload: task })
  }

  export const DeleteTask = (task: Task): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'task/deleteTask', payload: task })
  }

  export const EditTask = (task: Task): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'task/editTask', payload: task})
  }
