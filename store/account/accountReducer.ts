import { AccountActions } from './accountActions';
import { AccountState, initialState } from './accountState';

function accountReducer(state: AccountState = initialState, action: AccountActions): AccountState {
  if (action.type === 'account/addAccount') {
    return {
      ...state,
      account: action.payload
    }
  }
  else
    return state;
}

export default accountReducer;
