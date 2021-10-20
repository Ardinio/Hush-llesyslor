export interface TaskData {
    Id: number,
  HouseholdId: number,
  Title: string,
  Description: string,
  LastCheckDate?: Date,
  DaysToComplete: number,
  EnergyRequired: number
}

export const tasks: TaskData[] = [
    {
        Id: 1,
  HouseholdId: 1,
  Title: "Dammsuga",
  Description: "Hela huset",
  DaysToComplete: 1,
  EnergyRequired: 1
    },
    {
        Id: 2,
  HouseholdId: 1,
  Title: "Diska",
  Description: "allting",
  DaysToComplete: 1,
  EnergyRequired: 1
    }
]