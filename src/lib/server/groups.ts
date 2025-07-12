import { createServerFn } from "@tanstack/react-start";
import prisma from "../prisma";

export const getGroups = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
}).handler(async () => {
  return await prisma.group.findMany();
});
