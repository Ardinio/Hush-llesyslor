import { User } from '../../entities/User';
import { AppThunk } from '../store';

export interface AddUserAction {
  type: 'user/addUser';
  payload: User;
}

export type UserActions = AddUserAction;

export const AddUser = (user: User): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'user/addUser', payload: user })
  }
