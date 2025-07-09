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

export type group = {
  name: string;
  description: string;
  count: number;
  percent: number;
};

interface GroupsOverviewProps {
  groups: Array<group>;
}

const GroupsOverview = ({ groups }: GroupsOverviewProps) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{m.ago_antsy_dingo_sing()}</CardTitle>
        <CardDescription>{m.acidic_petty_snail_grow()}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {groups.map((group) => (
            <GroupOverviewGroupCard
              name={group.name}
              description={group.description}
              count={group.count}
              percent={group.percent}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupsOverview;
