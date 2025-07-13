import PageWrap from "@/components/page-wrap";
import TaskFilter from "@/components/tasks-filter";
import TaskTable from "@/components/tasks-table";
import { Priority, Status } from "@/generated/prisma/client";
import { getAllPriorities } from "@/lib/priorities";
import { getGroups, groupsQueryOptions } from "@/lib/server/groups";
import {
  tasksFilteredQueryOptions,
  tasksQueryOptions,
} from "@/lib/server/tasks";
import { getAllStatus } from "@/lib/status";
import { m } from "@/paraglide/messages";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/tasks")({
  component: RouteComponent,
  loader: async ({ context }) => {
    const { queryClient } = context;

    const [allStatus, allPriorities] = await Promise.all([
      getAllStatus(),
      getAllPriorities(),
      queryClient.ensureQueryData(groupsQueryOptions()),
      // queryClient.ensureQueryData(tasksFilteredQueryOptions({})),
    ]);
    return {
      allStatus,
      allPriorities,
    };
  },
});

function RouteComponent() {
  const state = Route.useLoaderData();
  const [searchValue, setSearchValue] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [groupFilter, setGroupFilter] = useState<string>("all");
  const groupQuery = useSuspenseQuery(groupsQueryOptions());
  const tasksQuery = useQuery(
    tasksFilteredQueryOptions({
      search: searchValue,
      status: statusFilter !== "all" ? (statusFilter as Status) : undefined,
      priority:
        priorityFilter !== "all" ? (priorityFilter as Priority) : undefined,
      group: groupFilter !== "all" ? +groupFilter : undefined,
    })
  );

  const { allStatus, allPriorities } = state;

  return (
    <PageWrap
      title={m.aqua_civil_salmon_sing()}
      subTitle={m.tame_sunny_ape_smile()}
      buttons={[
        { text: m.same_muddy_rooster_approve(), onClick: () => {}, icon: Plus },
      ]}
    >
      <TaskFilter
        searchValue={searchValue}
        onChangeSearchvalue={(newSearchValue) => setSearchValue(newSearchValue)}
        allStatus={allStatus}
        statusFilter={statusFilter}
        onChangeStatusFilter={(newStatusFilter) =>
          setStatusFilter(newStatusFilter)
        }
        allPriorities={allPriorities}
        priorityFilter={priorityFilter}
        onChangePriorityFilter={(newPriorityFilter) =>
          setPriorityFilter(newPriorityFilter)
        }
        groups={groupQuery.data}
        groupFilter={groupFilter}
        onChangeGroupFilter={(newGroupFilter) => setGroupFilter(newGroupFilter)}
      />
      {!tasksQuery.isLoading && <TaskTable tasks={tasksQuery.data} />}
    </PageWrap>
  );
}
