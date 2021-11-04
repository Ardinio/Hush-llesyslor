import { number } from 'yup/lib/locale';
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

  else if (action.type === 'task/editTask') {
    const taskIndex = state.task.findIndex((u) => u.Id === action.payload.Id) ?? { 
      Id: '', 
      HouseholdId: '', 
      Title: '', 
      Description: '', 
      recurringInDays: number, 
      EnergyRequired: number
    }
    console.log("Edit task at: " + taskIndex + " Id: " + action.payload.Id)
    return {
      ...state,
      task: state.task.map(
        (content, i) => i === taskIndex ? {...content, 
          Title: action.payload.Title, 
          Description: action.payload.Description, 
          recurringInDays: action.payload.recurringInDays, 
          EnergyRequired: action.payload.EnergyRequired
        } : content
      )
    }
  }
  else
    return state;
}

export default taskReducer;
