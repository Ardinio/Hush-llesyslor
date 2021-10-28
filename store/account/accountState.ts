import { mockedAccount } from "../../data/accountData";
import { ActiveAccount } from "../../entities/ActiveAccount";

export interface AccountState {
  account: ActiveAccount;
}

export const initialState: AccountState = {
  account: mockedAccount
}
