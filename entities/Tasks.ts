export type Tasks = {
    Id: number,
    Title: string,
    Description: string,
    LastCheckDate: number,           // TODO: Ska vara ett datum.
    DaysToComplete: number,
    Energy: number
}