import { Accounts } from '../../entities/Accounts';

export interface AccountState {
  AllAccounts: Accounts[];
}

export const initialState: AccountState = {
  AllAccounts: []
}
