import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import TaskCard from "./task-card";

const RecentTasks = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
        <CardDescription>Your latest task activities</CardDescription>
        <TaskCard
          title="Design landing page"
          description="Create wireframes and mockups"
          group="Fronted Development"
          assignedTo="Bob"
          priority="high"
          dueDate={new Date()}
        />
      </CardHeader>
    </Card>
  );
};

export default RecentTasks;
