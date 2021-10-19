import { Household } from '../../entities/Household';

export interface HouseholdState {
  AllHouseholds: Household[];
}

export const initialState: HouseholdState = {
  AllHouseholds: []
}
