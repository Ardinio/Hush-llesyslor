import { Task } from "../entities/Task";

export const mockedTasks: Task[] = [
  {
    Id: "1",
    HouseholdId: "1",
    Title: "Dammsuga",
    Description: "Hela huset",
    recurringInDays: 6,
    EnergyRequired: 8,
  },
  {
    Id: "2",
    HouseholdId: "1",
    Title: "Diska",
    Description: "Allting!",
    recurringInDays: 2,
    EnergyRequired: 1,
  },
  {
    Id: "3",
    HouseholdId: "2",
    Title: "Sopa",
    Description: "House Stark får snabbt skitiga golv, behöver sopas dagligen.",
    recurringInDays: 1,
    EnergyRequired: 4,
  },
];
