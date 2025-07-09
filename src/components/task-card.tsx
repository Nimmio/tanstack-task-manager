import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface TaskCardProps {
  title: string;
  description?: string;
  group?: string;
  assignedTo?: string;
  priority?: "low" | "medium" | "high";
  status?: "To Do" | "In Progress" | "Completed";
  dueDate?: Date;
}

const getPriorityBadgeVariant = (
  priority: TaskCardProps["priority"]
): "default" | "destructive" | "secondary" => {
  if (priority === "high") return "destructive";
  else if (priority === "medium") return "default";
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
            <Badge variant={getPriorityBadgeVariant(priority)}>
              {priority}
            </Badge>
            {dueDate && <>{dueDate.toDateString()}</>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
