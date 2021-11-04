
import { ActiveAccount } from '../../entities/ActiveAccount';
import { AppThunk } from '../store';

export interface SetActiveAccountAction {
  type: 'account/SetActiveAccount';
  payload: ActiveAccount;
}

export type AccountActions = SetActiveAccountAction;

export const SetActiveAccount = (account: ActiveAccount): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'account/SetActiveAccount', payload: account })
  }
