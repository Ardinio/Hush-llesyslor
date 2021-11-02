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
    const taskIndex = state.task.findIndex((u) => u.Id === action.payload.Id)
    console.log("task deleted at index: " + taskIndex + " Id: " + action.payload.Id)
    return {
      ...state,
      task: state.task.filter(i => i.Id !== action.payload.Id)
    }
  }

  // const currentUser = allUsers.find(
  //   (u) => u.AccountId === activeAccount.Id && u.HouseholdId === activeHouse?.Id
  // );

  // else if (action.type === 'task/deleteTask') {
  //   const filteredTask = state.task.filter((task) => {
  //     return task.Id !== action.payload.Id
  //   });
  //   return {
  //     ...state,
  //     task: filteredTask
  //   }
  // }
  else
    return state;
}

export default taskReducer;
