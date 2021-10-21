import { RootState } from '../store';

export const selectAllUsers = (state: RootState) => state.user.AllUsers;
export const selectUserById = (id: number) => (state: RootState) => {
  state.user.AllUsers.filter((x) => x.Id === id);
}
