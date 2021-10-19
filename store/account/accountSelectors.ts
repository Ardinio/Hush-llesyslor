import { RootState } from '../store';

export const selectAllAccounts = (state: RootState) => state.account.AllAccounts;
