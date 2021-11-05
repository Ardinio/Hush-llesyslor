import { mockedHousehold } from '../../data/householdData';
import { Household } from '../../entities/Household';

export interface HouseholdState {
  households: Household[];
  activeHouseholdId: string;
}

export const initialState: HouseholdState = {
    households: mockedHousehold,
    activeHouseholdId: '1'
};
