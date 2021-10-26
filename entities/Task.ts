export type Task = {
  Id: string,
  HouseholdId: string,
  Title: string,
  Description: string,
  LastCheckDate: Date,
  DaysToComplete: number,
  EnergyRequired: number
}
