import { Status } from "@/generated/prisma/client";

export const getAllStatus = () => {
  return [
    { value: "TODO", label: "Todo" },
    { value: "IN_PROGRESS", label: "In Progress" },
    { value: "COMPLETED", label: "Completed" },
  ];
};

export const getStatusLabel = (status: Status): string => {
  const mapping = {
    BACKLOG: "Backlog",
    TODO: "Todo",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
  };

  return mapping[status];
};
