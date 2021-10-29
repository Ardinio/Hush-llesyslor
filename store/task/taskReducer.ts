import { TaskActions } from './taskActions';
import { TaskState, initialState } from './taskState';

function taskReducer(state: TaskState = initialState, action: TaskActions): TaskState {
  if (action.type === 'task/addTask') {
    return {
      ...state,
      task: [ ...state.task, action.payload ]
    }
  }
  else if (action.type === 'task/deleteTask') {
    const getIndex = state.task.findIndex((t) => t.Id === action.payload.Id) ?? { Id: ''}
    return {
      ...state,
      task: state.task.map(
        (content, i) => i === getIndex ? {...content, id: action.payload.Id} : content
      )
    }
  }
  else
    return state;
}

export default taskReducer;
