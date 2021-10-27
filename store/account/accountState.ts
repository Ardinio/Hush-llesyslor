import { mockedAccount } from '../../data/accountData';
import { Account } from '../../entities/Account';

export interface AccountState {
  account: Account;
}

export const initialState: AccountState = {
    account: mockedAccount
};
