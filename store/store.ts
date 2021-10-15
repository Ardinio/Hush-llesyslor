import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import accountReducer from './account/accountReducer';
import { AccountActions } from './account/accountActions';
import householdReducer from './hosehold/householdReducer';
import { HouseholdActions } from './hosehold/householdActions';

const rootReducer = combineReducers({
  account: accountReducer,
  household: householdReducer
});

const thunkMiddleware = applyMiddleware<AppThunkDispatch>(thunk);
const store = createStore(rootReducer, thunkMiddleware);

type KnownActions = AccountActions | HouseholdActions;

export type AppThunkDispatch = ThunkDispatch <
  RootState,
  unknown,
  KnownActions
>;
      
export type AppThunk<ReturnType = void> = ThunkAction <
  ReturnType,
  RootState,
  unknown,
  KnownActions
>

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
