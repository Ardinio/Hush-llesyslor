import { Task } from '../entities/Task';

export const mockedTasks: Task[] = [
    {
        Id: '1',
        HouseholdId: '1',
        Title: 'Dammsuga',
        Description: 'Hela huset',
        recurringInDays: 6,
        EnergyRequired: 8
    },
    {
        Id: '2',
        HouseholdId: '1',
        Title: 'Diska',
        Description: 'allting',
        recurringInDays: 2,
        EnergyRequired: 1
    }
];
