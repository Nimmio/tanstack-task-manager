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

interface TaskTableProps {
  tasks: Array<{
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    group: string;
  }>;
}

const TaskTable = ({ tasks }: TaskTableProps) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>Found 20 Tasks</CardDescription>
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
            {tasks.map((task) => {
              const { id, title, description, status, priority } = task;
              return (
                <TableRow key={id}>
                  <TableCell>
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-gray-500">{description}</div>
                  </TableCell>
                  <TableCell>{status}</TableCell>
                  <TableCell>{priority}</TableCell>
                  <TableCell>
                    <Badge variant={"outline"}>{priority}</Badge>
                  </TableCell>
                  <TableCell>Bob</TableCell>
                  <TableCell>Tomorrow</TableCell>
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
