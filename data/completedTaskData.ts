import { CompletedTask } from '../entities/CompletedTask';

export const mockedCompletedTask: CompletedTask[] = [
    {
        Id: '1',
        TasksId: '1',
        UserId: '1',
        CompleteDate: new Date('2021-10-24')
    },
    {
        Id: '2',
        TasksId: '2',
        UserId: '1',
        CompleteDate: new Date('2021-10-23')
    },
    {
        Id: '3',
        TasksId: '1',
        UserId: '1',
        CompleteDate: new Date('2021-10-02')
    },
    {
        Id: '4',
        TasksId: '2',
        UserId: '2',
        CompleteDate: new Date('2021-10-26')
    }
];
