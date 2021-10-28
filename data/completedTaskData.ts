import { CompletedTask } from "../entities/CompletedTask";

const date1: Date = new Date("2021-10-24");
const date2: Date = new Date("2021-10-25");
const date3: Date = new Date("2021-10-26");

export const mockedCompletedTask: CompletedTask[] = [
  {
    Id: "1",
    TasksId: "1",
    UserId: "2",
    CompleteDate: date1,
  },
  {
    Id: "2",
    TasksId: "2",
    UserId: "1",
    CompleteDate: date2,
  },
  {
    Id: "3",
    TasksId: "1",
    UserId: "2",
    CompleteDate: date3,
  },
  {
    Id: "4",
    TasksId: "3",
    UserId: "3",
    CompleteDate: date1,
  },
  {
    Id: "5",
    TasksId: "3",
    UserId: "4",
    CompleteDate: date2,
  },
  {
    Id: "6",
    TasksId: "4",
    UserId: "3",
    CompleteDate: date3,
  },
]
