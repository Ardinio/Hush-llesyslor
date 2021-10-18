import { AccountActions } from './accountActions';
import { AccountState, initialState } from './accountState';

function accountReducer(state: AccountState = initialState, action: AccountActions): AccountState {
  if (action.type === 'accounts/addAccount') {
    return {
      ...state,
      AllAccounts: [ ...state.AllAccounts, action.payload ]
    }
  }
  else
    return state;
}

export default accountReducer;
