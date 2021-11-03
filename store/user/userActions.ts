import { User } from '../../entities/User';
import { AppThunk } from '../store';

export interface AddUserAction {
  type: 'user/addUser';
  payload: User;
}

export interface EditUserAction {
  type: 'user/editUser';
  payload: User;
}

export interface DeleteUserAction {
  type: 'user/deleteUser';
  payload: User;
}

export type UserActions = AddUserAction | EditUserAction | DeleteUserAction;

export const AddUser = (user: User): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'user/addUser', payload: user })
  }

  export const EditUser = (user: User): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'user/editUser', payload: user })
  }

  export const DeleteUser = (user: User): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'user/deleteUser', payload: user })
  }
  
