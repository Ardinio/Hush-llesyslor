import { Account } from "../../entities/Account";

export interface AccountState {
  AllAccounts: Account[];
}

export const initialState: AccountState = {
  AllAccounts: [
    {
      Id: "id1",
      Email: "test@test.com",
      Password: "Test",
    },
  ],
};
