import { mockedDatabase } from '../../data/databaseData';
import { Account } from '../../entities/Account';

export interface DatabaseState {
  accounts: Account[];
}

export const initialState: DatabaseState = {
    accounts: mockedDatabase
};
