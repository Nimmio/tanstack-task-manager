import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Edit, Trash2 } from "lucide-react";
import { TaskWithAssigneeAndGroup } from "@/types/task";
import { getStatusLabel } from "@/lib/status";
import { getPriorityLabel } from "@/lib/priorities";

interface TaskTableProps {
  tasks?: TaskWithAssigneeAndGroup[];
}

const TaskTable = ({ tasks }: TaskTableProps) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>Found {tasks?.length} Tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Group</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks &&
              tasks.map((task) => {
                const {
                  id,
                  title,
                  description,
                  status,
                  priority,
                  assigne,
                  dueDate,
                  group,
                } = task;
                return (
                  <TableRow key={id}>
                    <TableCell>
                      <div className="font-medium">{title}</div>
                      <div className="text-sm text-gray-500">{description}</div>
                    </TableCell>
                    <TableCell>{getStatusLabel(status)}</TableCell>
                    <TableCell>{getPriorityLabel(priority)}</TableCell>
                    <TableCell>
                      <Badge variant={"outline"}>{group?.title}</Badge>
                    </TableCell>
                    <TableCell>{assigne?.name}</TableCell>
                    <TableCell>{dueDate?.toDateString()}</TableCell>
                    <TableCell>
                      <Button variant={"ghost"}>
                        <Edit />
                      </Button>
                      <Button variant={"ghost"}>
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TaskTable;
