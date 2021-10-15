import { Accounts } from '../../entities/Accounts';

export interface AddAccountAction {
  type: 'accounts/addAccount';
  payload: Accounts;
}

export interface RemoveAccountAction {
  type: 'accounts/removeAccountById';
  payload: Accounts;
}

export type KnownActions = AddAccountAction | RemoveAccountAction;
