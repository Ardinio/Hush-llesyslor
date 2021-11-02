import { UserActions } from './userActions';
import { UserState, initialState } from './userState';

function userReducer(state: UserState = initialState, action: UserActions): UserState {
  if (action.type === 'user/addUser') {
    return {
      ...state,
      users: [ ...state.users, action.payload ]
    }
  }
  
  else if (action.type === 'user/deleteUser') {
    return {
      ...state,
      users: state.users.filter(i => i.Id !== action.payload.Id)
    }
  }

  else
    return state;
}

export default userReducer;
