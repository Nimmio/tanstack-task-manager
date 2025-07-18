import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import GroupOverviewGroupCard from "./group-overview-group-card";
import { m } from "@/paraglide/messages";
import { GroupWithUsesAndTasks } from "@/types/groups";
import { getCompletionRate } from "@/lib/tasks";

interface GroupsOverviewProps {
  groups: GroupWithUsesAndTasks[];
}

const GroupsOverview = ({ groups }: GroupsOverviewProps) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>{m.ago_antsy_dingo_sing()}</CardTitle>
        <CardDescription>{m.acidic_petty_snail_grow()}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {groups.map((group) => {
            const completionRate = getCompletionRate({
              allTasksCount: group.tasks.length,
              completedTasksCount: group.tasks.filter(
                (task) => task.status === "COMPLETED"
              ).length,
            });

            return (
              <GroupOverviewGroupCard
                key={group.id}
                title={group.title}
                description={group.description}
                count={group.tasks.length}
                percent={+completionRate.toFixed()}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupsOverview;
