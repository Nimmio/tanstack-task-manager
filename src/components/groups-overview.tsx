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
import { Group } from "@/generated/prisma/client";

interface GroupsOverviewProps {
  groups: Array<Group>;
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
          {groups.map((group) => (
            <GroupOverviewGroupCard
              key={group.id}
              name={group.title}
              description={group.description}
              count={5}
              percent={5}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupsOverview;
