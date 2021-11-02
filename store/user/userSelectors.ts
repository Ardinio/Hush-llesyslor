import { RootState } from '../store';

export const selectAllUsers = (state: RootState) => state.user.users;

export const selectUserById = (Id?: string) => (state: RootState) =>
    state.user.users.find(u => u.Id === Id);
