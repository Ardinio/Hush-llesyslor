import { Households } from '../../entities/Household';

export interface HouseholdState {
  AllHouseholds: Households[];
}

export const initialState: HouseholdState = {
  AllHouseholds: []
}
