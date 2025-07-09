import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface TaskFilterProps {}

const TaskFilter = ({}: TaskFilterProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex">
            <Filter className="mr-4" /> Filters
          </div>
        </CardTitle>
        <CardContent>
          <div className="flex grid-cols-5 gap-4">
            <span>
              <Input />
            </span>
            <span></span>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default TaskFilter;
