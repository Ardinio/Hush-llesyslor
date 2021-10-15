import { Households } from '../../entities/Household';

export interface AddHouseholdAction {
  type: 'household/addHousehold';
  payload: Households;
}

export type KnownActions = AddHouseholdAction;
