import { TaskActions } from './taskActions';
import { TaskState, initialState } from './taskState';

function taskReducer(state: TaskState = initialState, action: TaskActions): TaskState {
  if (action.type === 'task/addTask') {
    return {
      ...state,
      task: [ ...state.task, action.payload ]
    }
  }
  else
    return state;
}

export default taskReducer;
