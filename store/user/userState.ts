import { Users } from '../../entities/Users';

export interface UserState {
  AllUsers: Users[];
}

export const initialState: UserState = {
  AllUsers: []
}
