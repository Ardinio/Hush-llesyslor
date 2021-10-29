import { Household } from '../../entities/Household';
import { AppThunk } from '../store';

export interface AddHouseholdAction {
  type: 'household/addHousehold';
  payload: Household;
}

export interface EditHouseholdAction {
  type: 'household/editHousehold';
  payload: Household;
}

export type HouseholdActions = AddHouseholdAction | EditHouseholdAction;

export const AddHousehold = (household: Household): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'household/addHousehold', payload: household })
  }

export const EditHousehold = (household: Household): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'household/editHousehold', payload: household })
  }
