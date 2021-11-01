import { DatabaseActions } from './databaseActions';
import { DatabaseState, initialState } from './databaseState';

function databaseReducer(state: DatabaseState = initialState, action: DatabaseActions): DatabaseState {
  if (action.type === 'database/addAccount') {
    return {
      ...state,
      accounts: [ ...state.accounts, action.payload ]
    }
  }
  else
    return state;
}

export default databaseReducer;
