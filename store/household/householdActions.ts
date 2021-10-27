import { Household } from '../../entities/Household';
import { AppThunk } from '../store';

export interface AddHouseholdAction {
  type: 'household/addHousehold';
  payload: Household;
}

export type HouseholdActions = AddHouseholdAction;

export const AddHousehold = (household: Household): AppThunk =>
    async (dispatch, getState) => {
        dispatch({ type: 'household/addHousehold', payload: household });
    };
