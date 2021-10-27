import { RootState } from '../store';

export const selectAllHouseholds = (state: RootState) => state.household.households;
export const selectActiveHousehold = (state: RootState) => selectAllHouseholds(state).find(h => h.Id === state.household.activeHouseholdId);
