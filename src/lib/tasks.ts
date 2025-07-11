export const getCompletionRate = ({
  allTasksCount,
  completedTasksCount,
}: {
  allTasksCount: number;
  completedTasksCount: number;
}): number => {
  const result = (completedTasksCount / allTasksCount) * 100;
  return isNaN(result) ? 0 : result;
};
