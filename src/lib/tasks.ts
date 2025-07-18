import { Status, Task } from "@/generated/prisma/client";

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

export const getTasksPerStatus = ({
  tasks,
}: {
  tasks: Task[];
}): {
  BACKLOG: number;
  TODO: number;
  IN_PROGRESS: number;
  COMPLETED: number;
} => {
  return {
    BACKLOG: tasks.filter((task) => task.status === "BACKLOG").length,
    TODO: tasks.filter((task) => task.status === "TODO").length,
    IN_PROGRESS: tasks.filter((task) => task.status === "IN_PROGRESS").length,
    COMPLETED: tasks.filter((task) => task.status === "COMPLETED").length,
  };
};
