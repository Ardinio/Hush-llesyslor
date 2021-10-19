import { TaskActions } from './taskActions';
import { TaskState, initialState } from './taskState';

function taskReducer(state: TaskState = initialState, action: TaskActions): TaskState {
  if (action.type === 'task/addTask') {
    return {
      ...state,
      AllTasks: [ ...state.AllTasks, action.payload ]
    }
  }
  else
    return state;
}

export default taskReducer;
