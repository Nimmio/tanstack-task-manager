import { createServerFn } from "@tanstack/react-start";
import { getCompletedTasksCount, getLastTasks, getTasksCount } from "./tasks";
import { getUsersCount } from "./users";

export const getDashboardData = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
}).handler(async () => {
  const [taskCount, completedtaskCount, usersCount, lastFiveTasks] =
    await Promise.all([
      getTasksCount(),
      getCompletedTasksCount(),
      getUsersCount(),
      getLastTasks({ data: { count: 5 } }),
    ]);

  return { taskCount, completedtaskCount, usersCount, lastFiveTasks };
});
