import { Accounts } from '../../entities/Accounts';
import { AppThunk } from '../store';

export interface AddAccountAction {
  type: 'accounts/addAccount';
  payload: Accounts;
}

export type AccountActions = AddAccountAction;

export const AddAccount = (account: Accounts): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'accounts/addAccount', payload: account })
  }
