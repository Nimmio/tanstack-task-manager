import PageWrap from "@/components/page-wrap";
import TaskFilter from "@/components/tasks-filter";
import TaskTable from "@/components/tasks-table";
import { getGroups } from "@/lib/groups";
import { getAllStatus } from "@/lib/status";
import { m } from "@/paraglide/messages";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/tasks")({
  component: RouteComponent,
  loader: async () => {
    const groups = await getGroups();
    const allStatus = await getAllStatus();
    return {
      groups,
      allStatus,
    };
  },
});

function RouteComponent() {
  const state = Route.useLoaderData();
  const { groups, allStatus } = state;
  const [searchValue, setSearchValue] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
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
      />
      <TaskTable />
    </PageWrap>
  );
}
