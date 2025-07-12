import { createServerFn } from "@tanstack/react-start";
import prisma from "../prisma";
import { z } from "zod";
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

export const getLastTasks = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
})
  .validator((input: unknown) => {
    return z.object({ count: z.number().positive() }).parse(input);
  })
  .handler(async (ctx) => {
    const { count } = ctx.data;
    return await prisma.task.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      take: count,
    });
  });
