export type Task = {
  Id: number,
  HouseholdId: number,
  Title: string,
  Description: string,
  LastCheckDate: Date,
  DaysToComplete: number,
  EnergyRequired: number
}
