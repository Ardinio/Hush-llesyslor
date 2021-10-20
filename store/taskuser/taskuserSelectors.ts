import { RootState } from '../store';

export const selectAllTaskUsers = (state: RootState) => state.taskuser.AllTasksUsers;
export const selectAllTaskUsersByDate = (startdate: Date, enddate: Date) => (state: RootState) => {
  return state.taskuser.AllTasksUsers.filter(w => { return w.CompleteDate.getTime() > startdate.getTime() && w.CompleteDate.getTime() < enddate.getTime() });
};
