import { CompletedTaskActions } from './completedtaskActions';
import { CompletedTaskState, initialState } from './completedtaskState';

function completedTaskReducer(state: CompletedTaskState = initialState, action: CompletedTaskActions): CompletedTaskState {
  if (action.type === 'completedtask/addCompletedTask') {
    return {
      ...state,
      AllCompletedTasks: [ ...state.AllCompletedTasks, action.payload ]
    }
  }
  else
    return state;
}

export default completedTaskReducer;
