// src/routes/index.tsx
import DashboardStats from "@/components/dashboard-stats";
import GroupsOverview from "@/components/groups-overview";
import PageWrap from "@/components/page-wrap";
import RecentTasks from "@/components/recent-task";
import { Button } from "@/components/ui/button";
import { getDashboardData } from "@/lib/server/dashboard";
import { getGroups } from "@/lib/server/groups";
import { m } from "@/paraglide/messages";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [dashboardData, groups] = await Promise.all([
      getDashboardData(),
      getGroups(),
    ]);

    return {
      dashboardData,
      groups,
    };
  },

  component: Home,
});

function Home() {
  const state = Route.useLoaderData();
  const { dashboardData, groups } = state;
  console.log(dashboardData);
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
        totalTasksCount={dashboardData.taskCount}
        completedtasksCount={dashboardData.completedtaskCount}
        groupsCount={groups.length}
        usersCount={dashboardData.usersCount}
      />
      <RecentTasks tasks={dashboardData.lastFiveTasks} />
      <GroupsOverview groups={groups} />
    </PageWrap>
  );
}
