import { AllAvatars } from "../../data/avatars";
import { RootState } from "../store";

export const selectAllHouseholds = (state: RootState) =>
  state.household.households;
export const selectActiveHousehold = (state: RootState) =>
  selectAllHouseholds(state).find(
    (h) => h.Id === state.household.activeHouseholdId
  );

export const selectHouseholdsWithUsers = (state: RootState) => {
  return state.household.households.map((household) => {
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
