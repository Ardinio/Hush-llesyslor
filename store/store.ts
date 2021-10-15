import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import accountReducer from './reducers/accountReducer';
import householdReducer from './reducers/householdReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  household: householdReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
