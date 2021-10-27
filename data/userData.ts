import { User } from "../entities/User";

export const mockedUser: User[] = [
  {
    Id: "1",
    AccountId: "1",
    HouseholdId: "1",
    Name: "Emina",
    AvatarId: "1",
    IsOwner: true,
  },
  {
    Id: "2",
    AccountId: "2",
    HouseholdId: "1",
    Name: "Kicki",
    AvatarId: "3",
    IsOwner: false,
  },
  {
    Id: "3",
    AccountId: "2",
    HouseholdId: "1",
    Name: "Ardi",
    AvatarId: "2",
    IsOwner: false,
  },
];
