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

export interface SetActiveHouseholdAction {
  type: 'household/setActiveHousehold';
  payload: string;
}

export type HouseholdActions = AddHouseholdAction | EditHouseholdAction | SetActiveHouseholdAction;

export const AddHousehold = (household: Household): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'household/addHousehold', payload: household })
  }

export const EditHousehold = (household: Household): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'household/editHousehold', payload: household })
  }

export const SetActiveHousehold = (householdId: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: 'household/setActiveHousehold', payload: householdId })
  }
