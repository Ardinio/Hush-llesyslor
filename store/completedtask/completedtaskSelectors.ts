import { RootState } from '../store';

export const selectAllCompletedTasks = (state: RootState) => state.completedtask.AllCompletedTasks;
export const selectCompletedTasksByDate = (startdate: Date, enddate: Date) => (state: RootState) => {
  console.log('startdate: ', startdate.getTime());
  return state.completedtask.AllCompletedTasks.filter((x) => { return x.CompleteDate.getTime() > startdate.getTime() && x.CompleteDate.getTime() < enddate.getTime() });
}
