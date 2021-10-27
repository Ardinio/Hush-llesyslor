import { RootState } from '../store';

export const selectAllAccountsFromDatabase = (state: RootState) => state.database.accounts;
