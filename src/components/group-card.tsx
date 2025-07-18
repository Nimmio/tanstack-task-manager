import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Users } from "lucide-react";
import { GroupWithUsesAndTasks } from "@/types/groups";
import { getCompletionRate, getTasksPerStatus } from "@/lib/tasks";
import { Badge } from "./ui/badge";

interface GroupCardProps {
  group: GroupWithUsesAndTasks;
}

const GroupCard = ({ group }: GroupCardProps) => {
  const { id, title, description, tasks, users } = group;
  const completionRate = getCompletionRate({
    allTasksCount: tasks.length,
    completedTasksCount: tasks.filter((task) => task.status === "COMPLETED")
      .length,
  });
  const { BACKLOG, COMPLETED, IN_PROGRESS, TODO } = getTasksPerStatus({
    tasks,
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between ">
          <span>Progress</span>
          <span>{completionRate.toFixed()}%</span>
        </div>
        <Progress value={completionRate} className="mt-2" />
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Card>
            <CardContent>
              <div className="flex justify-center">{BACKLOG}</div>
              <div className="flex justify-center">Backlog</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-center">{TODO}</div>
              <div className="flex justify-center">Todo</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-center">{IN_PROGRESS}</div>
              <div className="flex justify-center">In Progress</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-center">{COMPLETED}</div>
              <div className="flex justify-center">Completed</div>
            </CardContent>
          </Card>
        </div>
        <Separator className="mt-4" />
        <div className="flex mt-4">
          <Users className="mr-2" />
          {users.map((user) => (
            <Badge className="mr-2">{user.name} </Badge>
          ))}
        </div>
        <Separator className="mt-4" />

        <div className="flex justify-between mt-4">
          <span>Total Tasks</span>
          <span>{tasks.length}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
