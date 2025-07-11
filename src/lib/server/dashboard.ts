import { createServerFn } from "@tanstack/react-start";
import { getCompletedTasksCount, getTasksCount } from "./tasks";
import { getUsersCount } from "./users";

export const getDashboardData = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
}).handler(async () => {
  const [taskCount, completedtaskCount, usersCount] = await Promise.all([
    getTasksCount(),
    getCompletedTasksCount(),
    getUsersCount(),
  ]);

  return { taskCount, completedtaskCount, usersCount };
});
