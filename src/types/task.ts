import { Prisma } from "@/generated/prisma/client";

export type TaskWithAssigneeAndGroup = Prisma.TaskGetPayload<{
  include: { assigne: true; group: true };
}>;
