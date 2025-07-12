import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import TaskCard from "./task-card";
import { Task } from "@/generated/prisma/client";

interface RecentTasksProps {
  tasks: Task[];
}

const RecentTasks = ({ tasks }: RecentTasksProps) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
        <CardDescription>Your latest task activities</CardDescription>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            group="group"
            assignedTo="assigne"
            priority={task.priority}
            status={task.status}
            dueDate={task.dueDate || undefined}
          />
        ))}
      </CardHeader>
    </Card>
  );
};

export default RecentTasks;
