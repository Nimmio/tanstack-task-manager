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
import { GroupWithUsesAndTasks } from "@/types/groups";

interface TaskFilterProps {
  searchValue: string;
  onChangeSearchvalue: (newSearchValue: string) => void;
  statusFilter: string;
  onChangeStatusFilter: (newStatusFilter: string) => void;
  allStatus: Array<{ value: string; label: string }>;
  allPriorities: Array<{ value: string; label: string }>;
  priorityFilter: string;
  onChangePriorityFilter: (newPriorityFilter: string) => void;
  groups: GroupWithUsesAndTasks[];
  groupFilter: string;
  onChangeGroupFilter: (newGroupFilter: string) => void;
}

const TaskFilter = ({
  searchValue,
  onChangeSearchvalue,
  statusFilter,
  onChangeStatusFilter,
  allStatus,
  allPriorities,
  priorityFilter,
  onChangePriorityFilter,
  groups,
  groupFilter,
  onChangeGroupFilter,
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
                  <SelectItem value="all">All Statuses</SelectItem>
                  {allStatus.map((status) => (
                    <SelectItem value={status.value} key={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </span>
            <span>
              <Select
                value={priorityFilter}
                onValueChange={(newValue) => onChangePriorityFilter(newValue)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  {allPriorities.map((priority) => (
                    <SelectItem value={priority.value} key={priority.value}>
                      {priority.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </span>
            <span>
              <Select
                value={groupFilter}
                onValueChange={(newValue) => onChangeGroupFilter(newValue)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Groups</SelectItem>
                  {groups.map((group) => (
                    <SelectItem value={group.id.toString()} key={group.id}>
                      {group.title}
                    </SelectItem>
                  ))}
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
