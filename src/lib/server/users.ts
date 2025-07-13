import { createServerFn } from "@tanstack/react-start";
import prisma from "../prisma";
import { queryOptions } from "@tanstack/react-query";

export const userCountQueryOptions = () =>
  queryOptions({
    queryKey: ["user", "count"],
    queryFn: () => getUsersCount(),
  });

export const getUsersCount = createServerFn({
  method: "GET",
}).handler(async () => {
  return await prisma.user.count();
});
