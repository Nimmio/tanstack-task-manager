import { Prisma } from "@/generated/prisma/client";

export type GroupWithUsesAndTasks = Prisma.GroupGetPayload<{
  include: { users: true; tasks: true };
}>;
