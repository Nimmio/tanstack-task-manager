import { createServerFn } from "@tanstack/react-start";
import prisma from "../prisma";
import { z } from "zod";
import { queryOptions } from "@tanstack/react-query";
import { Group, Priority, Status } from "@/generated/prisma/client";
import { TaskWhereInput } from "@/generated/prisma/models";

export const tasksQueryOptions = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => getTasks(),
  });

export const getTasks = createServerFn({ method: "GET" }).handler(async () => {
  return await prisma.task.findMany({
    include: {
      assigne: true,
      group: true,
    },
  });
});

export const tasksLastQueryOptions = (count: number) =>
  queryOptions({
    queryKey: ["posts", count],
    queryFn: () => getLastTasks({ data: { count: count } }),
  });

export const getLastTasks = createServerFn({
  method: "GET",
})
  .validator((d: unknown) => {
    return z.object({ count: z.number().positive() }).parse(d);
  })
  .handler(async (ctx) => {
    const { count } = ctx.data;
    return await prisma.task.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      take: count,
      include: {
        assigne: true,
        group: true,
      },
    });
  });

export const tasksFilteredQueryOptions = ({
  search,
  status,
  priority,
  group,
}: {
  search?: string;
  status?: Status;
  priority?: Priority;
  group?: number;
}) =>
  queryOptions({
    queryKey: ["posts", search, status, priority, group],
    queryFn: () =>
      getFilteredtasks({ data: { search, status, priority, group } }),
  });

const getFilteredtasksSchema = z.object({
  search: z.string().optional(),
  status: z.enum(["BACKLOG", "TODO", "IN_PROGRESS", "COMPLETED"]).optional(),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"]).optional(),
  group: z.number().optional(),
});

export const getFilteredtasks = createServerFn({
  method: "GET",
})
  .validator((d: unknown) => {
    return getFilteredtasksSchema.parse(d);
  })
  .handler(async (ctx) => {
    const { search, status, priority, group } = ctx.data;

    const where: TaskWhereInput = {
      AND: [
        {
          OR: [
            {
              title: {
                contains: search,
              },
            },
            {
              description: {
                contains: search,
              },
            },
          ],
        },
        status !== undefined
          ? {
              status: status,
            }
          : {},
        priority !== undefined
          ? {
              priority: priority,
            }
          : {},
        group !== undefined ? { groupId: group } : {},
      ],
    };

    return await prisma.task.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        assigne: true,
        group: true,
      },
      where: where,
    });
  });

export const tasksCountQueryOptions = () =>
  queryOptions({
    queryKey: ["posts", "count"],
    queryFn: () => getTasksCount(),
  });

export const getTasksCount = createServerFn({
  method: "GET",
}).handler(async () => {
  return await prisma.task.count();
});

export const taskCountCompletedQueryOptions = () =>
  queryOptions({
    queryKey: ["posts", "count", "completed"],
    queryFn: () => getCompletedTasksCount(),
  });

export const getCompletedTasksCount = createServerFn({
  method: "GET",
}).handler(async () => {
  return await prisma.task.count({
    where: {
      status: "COMPLETED",
    },
  });
});
