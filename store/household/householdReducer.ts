import * as householdAction from '../household/householdActions';
import { Households } from '../../entities/Household';

interface HouseholdState {
  AllHouseholds: Households[];
}

const initialState: HouseholdState = {
  AllHouseholds: []
}

function householdReducer(state: HouseholdState = initialState, action: householdAction.KnownActions): HouseholdState {
  if (action.type === 'household/addHousehold') {
    return {
      ...state,
      AllHouseholds: [ ...state.AllHouseholds, action.payload ]
    }
  }
  else
    return state;
}

export default householdReducer;
