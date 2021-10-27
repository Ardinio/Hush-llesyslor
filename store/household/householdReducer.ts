import { HouseholdActions } from './householdActions';
import { HouseholdState, initialState } from './householdState';

function householdReducer(state: HouseholdState = initialState, action: HouseholdActions): HouseholdState {
    if (action.type === 'household/addHousehold') {
        return {
            ...state,
            households: [...state.households, action.payload]
        };
    } else { return state; }
}

export default householdReducer;
