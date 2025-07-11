import PageWrap from "@/components/page-wrap";
import TaskFilter from "@/components/tasks-filter";
import TaskTable from "@/components/tasks-table";
import { getGroups } from "@/lib/groups";
import { getAllPriorities } from "@/lib/priorities";
import { getAllStatus } from "@/lib/status";
import { m } from "@/paraglide/messages";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/tasks")({
  component: RouteComponent,
  loader: async () => {
    const [groups, allStatus, allPriorities] = await Promise.all([
      getGroups(),
      getAllStatus(),
      getAllPriorities(),
    ]);
    return {
      groups,
      allStatus,
      allPriorities,
    };
  },
});

function RouteComponent() {
  const state = Route.useLoaderData();
  const { groups, allStatus, allPriorities } = state;
  const [searchValue, setSearchValue] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [groupFilter, setGroupFilter] = useState<string>("all");
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
        groups={groups}
        groupFilter={groupFilter}
        onChangeGroupFilter={(newGroupFilter) => setGroupFilter(newGroupFilter)}
      />
      <TaskTable />
    </PageWrap>
  );
}
