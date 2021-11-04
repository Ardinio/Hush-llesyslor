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

  else if (action.type === 'user/editUser') {
    const indexget = state.users.findIndex((x) => x.Id === action.payload.Id ) ?? { Id: '', AccountId: '', HousholdId: '', Name: '', AvatarId: '', IsOwner: undefined}
    return {
      ...state,
      users: state.users.map(
        (content, i) => i === indexget ? {...content, Name: action.payload.Name, AvatarId: action.payload.AvatarId} : content
      )
    }
  }

  else
    return state;
}

export default userReducer;
