import { RootState } from '../store';

export const selectAllUsers = (state: RootState) => state.user.users;

export const selectCurrentUser = (state: RootState) => {
    const accountId = state.account.account.Id;
    const activeHoseHoldId = state.household.activeHouseholdId;
    const currentUser = state.user.users.find(u =>
        u.AccountId === accountId && u.HouseholdId === activeHoseHoldId);
    return currentUser;
}

export const selectIsAdmin = (state: RootState) => {
    const currentUser = selectCurrentUser(state);
    return currentUser?.IsOwner;
}
