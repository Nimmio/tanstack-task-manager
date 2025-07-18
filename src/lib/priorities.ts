import { Priority } from "@/generated/prisma/client";

export const getAllPriorities = () => {
  return [
    { value: "HIGH", label: "High" },
    { value: "MEDIUM", label: "Medium" },
    { value: "LOW", label: "Low" },
  ];
};

export const getPriorityLabel = (priority: Priority): string => {
  const mapping = {
    HIGH: "High",
    MEDIUM: "Medium",
    LOW: "Low",
  };

  return mapping[priority];
};
