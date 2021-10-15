import * as accountAction from '../account/accountActions';
import { Accounts } from '../../entities/Accounts';

interface AccountState {
  AllAccounts: Accounts[];
}

const initialState: AccountState = {
  AllAccounts: []
}

function accountReducer(state: AccountState = initialState, action: accountAction.KnownActions): AccountState {
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
