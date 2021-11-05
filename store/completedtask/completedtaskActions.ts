import { CompletedTask } from '../../entities/CompletedTask';
import { AppThunk } from '../store';

export interface AddCompletedTaskAction {
  type: 'completedtask/addCompletedTask';
  payload: CompletedTask;
}

export type CompletedTaskActions = AddCompletedTaskAction;

export const AddCompletedTask = (completedtask: CompletedTask): AppThunk =>
    async (dispatch, getState) => {
        dispatch({ type: 'completedtask/addCompletedTask', payload: completedtask });
    };
