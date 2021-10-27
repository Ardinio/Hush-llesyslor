import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import accountReducer from './account/accountReducer';
import { AccountActions } from './account/accountActions';
import householdReducer from './household/householdReducer';
import { HouseholdActions } from './household/householdActions';
import userReducer from './user/userReducer';
import { UserActions } from './user/userActions';
import taskReducer from './task/taskReducer';
import { TaskActions } from './task/taskActions';
import completedTaskReducer from './completedtask/completedtaskReducer';
import { CompletedTaskActions } from './completedtask/completedtaskActions';
import databaseReducer from './database/databaseReducer';
import { DatabaseActions } from './database/databaseActions';

const rootReducer = combineReducers({
  account: accountReducer,
  household: householdReducer,
  user: userReducer,
  task: taskReducer,
  completedtask: completedTaskReducer,
  database: databaseReducer
});

const thunkMiddleware = applyMiddleware<AppThunkDispatch>(thunk);
const store = createStore(rootReducer, thunkMiddleware);

type KnownActions = AccountActions | HouseholdActions | UserActions | TaskActions | CompletedTaskActions | DatabaseActions;

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
