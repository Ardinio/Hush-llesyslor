import { Account } from '../../entities/Account';

export interface AccountState {
  AllAccounts: Account[];
}

export const initialState: AccountState = {
  AllAccounts: []
}
