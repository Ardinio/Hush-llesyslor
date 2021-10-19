import { User } from '../../entities/User';

export interface UserState {
  AllUsers: User[];
}

export const initialState: UserState = {
  AllUsers: []
}
