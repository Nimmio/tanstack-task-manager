import { createServerFn } from "@tanstack/react-start";
import prisma from "../prisma";
import { queryOptions } from "@tanstack/react-query";

export const groupsQueryOptions = () =>
  queryOptions({
    queryKey: ["groups"],
    queryFn: () => getGroups(),
  });

export const getGroups = createServerFn({
  method: "GET",
}).handler(async () => {
  return await prisma.group.findMany({
    include: {
      tasks: true,
      users: true,
    },
  });
});
