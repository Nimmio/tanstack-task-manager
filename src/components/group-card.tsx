import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { group } from "@/lib/groups";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Users } from "lucide-react";

interface GroupCardProps {
  group: group;
}

const GroupCard = ({ group }: GroupCardProps) => {
  const { id, name, description, count, percent } = group;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between ">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
        <Progress value={percent} className="mt-2" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Card>
            <CardContent>
              <div className="flex justify-center">1</div>
              <div className="flex justify-center">Completed</div>
            </CardContent>
          </Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Separator className="mt-4" />
        <div className="flex mt-4">
          <Users className="mr-2" />
          Members
        </div>
        <div className="mt-4">bla</div>
        <Separator className="mt-4" />

        <div className="flex justify-between mt-4">
          <span>Total Tasks</span>
          <span>5</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
