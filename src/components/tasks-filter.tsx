import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Filter, Search } from "lucide-react";
import { Input } from "./ui/input";
import { m } from "@/paraglide/messages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface TaskFilterProps {
  searchValue: string;
  onChangeSearchvalue: (newSearchValue: string) => void;
  statusFilter: string;
  onChangeStatusFilter: (newStatusFilter: string) => void;
  allStatus: Array<{ value: string; label: string }>;
}

const TaskFilter = ({
  searchValue,
  onChangeSearchvalue,
  statusFilter,
  onChangeStatusFilter,
  allStatus,
}: TaskFilterProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex">
            <Filter className="mr-4" /> {m.tiny_busy_pug_emerge()}
          </div>
        </CardTitle>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <span>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder={m.even_clean_larva_arrive()}
                  value={searchValue}
                  onChange={(e) => onChangeSearchvalue(e.target.value)}
                  className="pl-10"
                />
              </div>
            </span>
            <span>
              <Select
                value={statusFilter}
                onValueChange={(newValue) => onChangeStatusFilter(newValue)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {allStatus.map((status) => (
                    <SelectItem value={status.value} key={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </span>
            <span>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </span>
            <span>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </span>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default TaskFilter;
