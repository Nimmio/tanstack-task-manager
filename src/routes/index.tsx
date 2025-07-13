// src/routes/index.tsx
import DashboardStats from "@/components/dashboard-stats";
import GroupsOverview from "@/components/groups-overview";
import PageWrap from "@/components/page-wrap";
import RecentTasks from "@/components/recent-task";
import { getDashboardData } from "@/lib/server/dashboard";
import { getGroups, groupsQueryOptions } from "@/lib/server/groups";
import {
  taskCountCompletedQueryOptions,
  tasksCountQueryOptions,
  tasksLastQueryOptions,
} from "@/lib/server/tasks";
import { userCountQueryOptions } from "@/lib/server/users";
import { m } from "@/paraglide/messages";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    const { queryClient } = context;
    await Promise.all([
      queryClient.ensureQueryData(tasksCountQueryOptions()),
      queryClient.ensureQueryData(taskCountCompletedQueryOptions()),
      queryClient.ensureQueryData(tasksLastQueryOptions(5)),
      queryClient.ensureQueryData(groupsQueryOptions()),
      queryClient.ensureQueryData(userCountQueryOptions()),
    ]);
  },

  component: Home,
});

function Home() {
  const taskCountQuery = useSuspenseQuery(tasksCountQueryOptions());
  const taskCompletedCountQuery = useSuspenseQuery(
    taskCountCompletedQueryOptions()
  );
  const taskLastQuery = useSuspenseQuery(tasksLastQueryOptions(5));
  const groupQuery = useSuspenseQuery(groupsQueryOptions());
  const userCountQuery = useSuspenseQuery(userCountQueryOptions());

  return (
    <PageWrap
      title={m.aware_gray_puffin_pout()}
      subTitle={m.grassy_clear_cougar_blend()}
      buttons={[
        { text: m.same_muddy_rooster_approve(), icon: Plus, onClick: () => {} },
        {
          text: m.novel_zippy_crab_exhale(),
          variant: "outline",
          icon: Plus,
          onClick: () => {},
        },
        {
          text: m.known_pretty_platypus_edit(),
          variant: "outline",
          icon: Plus,
          onClick: () => {},
        },
      ]}
    >
      <DashboardStats
        totalTasksCount={taskCountQuery.data}
        completedtasksCount={taskCompletedCountQuery.data}
        groupsCount={groupQuery.data.length}
        usersCount={userCountQuery.data}
      />
      <RecentTasks tasks={taskLastQuery.data} />
      <GroupsOverview groups={groupQuery.data} />
    </PageWrap>
  );
}
