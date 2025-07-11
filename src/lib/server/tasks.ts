import { createServerFn } from "@tanstack/react-start";
import prisma from "../prisma";

export const getTasksCount = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
}).handler(async () => {
  return await prisma.task.count();
});

export const getCompletedTasksCount = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
}).handler(async () => {
  return await prisma.task.count({
    where: {
      status: "COMPLETED",
    },
  });
});
