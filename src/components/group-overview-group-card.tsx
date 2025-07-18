import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { m } from "@/paraglide/messages";
import { Group } from "@/generated/prisma/client";

interface GroupOverviewGroupCardProps {
  title: string;
  description: string;
  count: number;
  percent: number;
}

const GroupOverviewGroupCard = ({
  title,
  description,
  count,
  percent,
}: GroupOverviewGroupCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <span>{title}</span>
            <Badge variant={"outline"}>{count} Tasks</Badge>
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <span>{m.such_stock_jay_loop()}</span>
          <span>{percent}%</span>
        </div>
        <Progress value={percent} className="mt-4" />
      </CardContent>
    </Card>
  );
};

export default GroupOverviewGroupCard;
