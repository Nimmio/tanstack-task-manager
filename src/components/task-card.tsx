import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Priority } from "@/generated/prisma/client";
import { Status } from "@/generated/prisma/enums";
import { getPriorityLabel } from "@/lib/priorities";
import { getStatusLabel } from "@/lib/status";

interface TaskCardProps {
  title: string;
  description?: string;
  group?: string;
  assignedTo?: string;
  priority: Priority;
  status: Status;
  dueDate?: Date;
}

const getPriorityBadgeVariant = (
  priority: TaskCardProps["priority"]
): "default" | "destructive" | "secondary" => {
  if (priority === "HIGH") return "destructive";
  else if (priority === "MEDIUM") return "default";
  else return "secondary";
};

const TaskCard = ({
  title,
  description,
  group,
  assignedTo,
  priority,
  status,
  dueDate,
}: TaskCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Badge variant={"outline"}>{group}</Badge>
            {assignedTo && (
              <span className="text-xs text-gray-500">
                Assigned to {assignedTo}
              </span>
            )}
          </div>
          <div className="flex gap-4">
            {dueDate && <>{dueDate.toDateString()}</>}
            <Badge>{getStatusLabel(status)}</Badge>
            <Badge variant={getPriorityBadgeVariant(priority)}>
              {getPriorityLabel(priority)}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
