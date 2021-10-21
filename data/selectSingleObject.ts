import { User } from '../entities/User';
import { Task } from '../entities/Task';

export function singleUserById(userArray: User[], id: number): User {
  return userArray.find((x) => x.Id === id) ?? { Id: -1, AccountId: -1, HouseholdId: -1, Name: '', AvatarId: -1, IsOwner: false };
}

export function singleTaskById(taskArray: Task[], id: number): Task {
  return taskArray.find((x) => x.Id === id) ?? { Id: -1, HouseholdId: -1, Title: '', Description: '', LastCheckDate: new Date(-1), DaysToComplete: -1, EnergyRequired: -1 };
}
