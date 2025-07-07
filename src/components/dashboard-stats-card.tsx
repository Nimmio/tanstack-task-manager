import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckSquare, LucideIcon } from "lucide-react";
import { Progress } from "./ui/progress";

interface DashboardStatsCardProps {
  title: string;
  Icon: LucideIcon;
  main: string;
  sub: string | ReactNode;
}

const DashboardStatsCard = ({
  title,
  Icon,
  main,
  sub,
}: DashboardStatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent className="h-full">
        <div className="text-2xl font-bold">{main}</div>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardStatsCard;
