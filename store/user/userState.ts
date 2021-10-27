import { User } from '../../entities/User';
import { mockedUser } from '../../data/userData';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
    users: mockedUser
};
