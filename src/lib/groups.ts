import { createServerFn } from "@tanstack/react-start";

export const getGroups = createServerFn({
  method: "GET", // HTTP method to use
  response: "data", // Response handling mode
}).handler(async () => {
  return [
    {
      name: "Frontend Development",
      description: "UI/UX related tasks",
      count: 10,
      percent: 25,
    },
    {
      name: "Backend Development",
      description: "Server-side development",
      count: 10,
      percent: 25,
    },
    {
      name: "DevOps",
      description: "Infrastructure and deployment",
      count: 10,
      percent: 25,
    },
  ];
});
