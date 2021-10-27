import { Account } from '../../entities/Account';
import { AppThunk } from '../store';

export interface AddAccountToDatabaseAction {
  type: 'database/addAccount';
  payload: Account;
}

export type DatabaseActions = AddAccountToDatabaseAction;

export const AddAccountToDatabase = (account: Account): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'database/addAccount', payload: account })
  }
