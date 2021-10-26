import { Account } from '../../entities/Account';
import { AppThunk } from '../store';

export interface AddAccountAction {
  type: 'account/addAccount';
  payload: Account;
}

export type AccountActions = AddAccountAction;

export const AddAccount = (account: Account): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'account/addAccount', payload: account })
  }
