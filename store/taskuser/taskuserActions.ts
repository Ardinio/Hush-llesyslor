import { TasksUsers } from '../../entities/TasksUsers';
import { AppThunk } from '../store';

export interface AddTaskUserAction {
  type: 'taskuser/addTaskUser';
  payload: TasksUsers;
}

export type TaskUserActions = AddTaskUserAction;

export const AddTaskUser = (taskuser: TasksUsers): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'taskuser/addTaskUser', payload: taskuser })
  }
