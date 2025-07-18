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
import { User } from "@/generated/prisma/client";

interface UserTableProps {
  users?: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Found {users?.length} Users</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Tasks</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users &&
              users.map((user) => {
                const { id, createdAt, name, email } = user;
                return (
                  <TableRow key={id}>
                    <TableCell>
                      <div className="font-medium">{name}</div>
                      <div className="text-sm text-gray-500">{email}</div>
                    </TableCell>
                    <TableCell>Todo</TableCell>
                    <TableCell>{createdAt.toDateString()}</TableCell>
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

export default UserTable;
