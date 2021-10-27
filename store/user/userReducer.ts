import { UserActions } from './userActions';
import { UserState, initialState } from './userState';

function userReducer(state: UserState = initialState, action: UserActions): UserState {
    if (action.type === 'user/addUser') {
        return {
            ...state,
            users: [...state.users, action.payload]
        };
    } else { return state; }
}

export default userReducer;
