import { createServerFn } from "@tanstack/react-start";

export type group = {
  id: number;
  name: string;
  description: string;
  count: number;
  percent: number;
};

export const getGroups = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
}).handler(async () => {
  const groups: group[] = [
    {
      id: 1,
      name: "Frontend Development",
      description: "UI/UX related tasks",
      count: 10,
      percent: 25,
    },
    {
      id: 2,
      name: "Backend Development",
      description: "Server-side development",
      count: 10,
      percent: 25,
    },
    {
      id: 3,
      name: "DevOps",
      description: "Infrastructure and deployment",
      count: 10,
      percent: 25,
    },
  ];
  return groups;
});
