import { CompletedTask } from "../entities/CompletedTask";

const date1: Date = new Date("2021-10-30");
const date2: Date = new Date("2021-11-01");
const date3: Date = new Date("2021-10-20");
const date4: Date = new Date();

export const mockedCompletedTask: CompletedTask[] = [
  {
    Id: "1",
    TasksId: "1",
    UserId: "1",
    CompleteDate: date4,
  },
  {
    Id: "2",
    TasksId: "1",
    UserId: "2",
    CompleteDate: date4,
  },
  {
    Id: "3",
    TasksId: "2",
    UserId: "3",
    CompleteDate: date2,
  },
  {
    Id: "4",
    TasksId: "3",
    UserId: "7",
    CompleteDate: date1,
  },
  {
    Id: "5",
    TasksId: "3",
    UserId: "8",
    CompleteDate: date4,
  },
  {
    Id: "6",
    TasksId: "4",
    UserId: "9",
    CompleteDate: date3,
  },
]
