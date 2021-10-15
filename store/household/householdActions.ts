import { Households } from '../../entities/Household';
import { AppThunk } from '../store';

export interface AddHouseholdAction {
  type: 'household/addHousehold';
  payload: Households;
}

export type HouseholdActions = AddHouseholdAction;

export const AddHousehold = (household: Households): AppThunk => 
  async (dispatch, getState) => {
    dispatch({ type: 'household/addHousehold', payload: household })
  }
