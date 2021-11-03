import { HouseholdActions } from './householdActions';
import { HouseholdState, initialState } from './householdState';

function householdReducer(state: HouseholdState = initialState, action: HouseholdActions): HouseholdState {
  if (action.type === 'household/addHousehold') {
    return {
      ...state,
      households: [ ...state.households, action.payload ]
    }
  }

  else if (action.type === 'household/editHousehold') {
    const indexget = state.households.findIndex((x) => x.Id === action.payload.Id ) ?? { Id: '', Name: '', GeneratedCode: '' }
    return {
      ...state,
      households: state.households.map(
        (content, i) => i === indexget ? {...content, Name: action.payload.Name} : content
      )
    }
  }

  else if (action.type === 'household/setActiveHousehold') {
    return { ...state, activeHouseholdId: action.payload }
  }

  else
    return state;
}

export default householdReducer;
