import { AllAvatars } from "../../data/avatars";
import { RootState } from "../store";
import { Household } from '../../entities/Household';

export const selectAllHouseholds = (state: RootState) =>
  state.household.households;
export const selectActiveHousehold = (state: RootState) =>
  selectAllHouseholds(state).find(
    (h) => h.Id === state.household.activeHouseholdId
  );

export const selectHouseholdsWithUsers = (state: RootState) => {
  const householdIds = state.user.users.filter(x => x.AccountId === state.account.account.Id).map(y => y.HouseholdId);
  const households: Household[] = [];
  state.household.households.filter((x) => {
    householdIds.forEach((y) => {
      if (y === x.Id)
        households.push(x);
    })
  })
  return households.map((household) => {
    const users = state.user.users.filter(
      (u) => u.HouseholdId === household.Id
    );
    const usersWithAvatar = users.map((user) => {
      const avatar = AllAvatars.find((a) => a.Id === user?.AvatarId);
      return { ...user, avatar };
    });
    return { ...household, users: usersWithAvatar };
  });
};
