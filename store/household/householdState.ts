import { Households } from '../../entities/Households';

export interface HouseholdState {
  AllHouseholds: Households[];
}

export const initialState: HouseholdState = {
  AllHouseholds: []
}
