import { Users } from '../../entities/Users';
import { AppThunk } from '../store';

export interface AddUserAction {
  type: 'user/addUser';
  payload: Users;
}

export type UserActions = AddUserAction;

export const AddUser = (user: Users): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'user/addUser', payload: user })
  }
