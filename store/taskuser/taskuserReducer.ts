import { TaskUserActions } from './taskuserActions';
import { TaskUserState, initialState } from './taskuserState';

function taskuserReducer(state: TaskUserState = initialState, action: TaskUserActions): TaskUserState {
  if (action.type === 'taskuser/addTaskUser') {
    return {
      ...state,
      AllTasksUsers: [ ...state.AllTasksUsers, action.payload ]
    }
  }
  else
    return state;
}

export default taskuserReducer;
