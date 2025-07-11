// src/routes/index.tsx
import DashboardStats from "@/components/dashboard-stats";
import GroupsOverview from "@/components/groups-overview";
import PageWrap from "@/components/page-wrap";
import RecentTasks from "@/components/recent-task";
import { Button } from "@/components/ui/button";
import { getGroups } from "@/lib/server/groups";
import { m } from "@/paraglide/messages";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  loader: async () => {
    const groups = await getGroups();

    return {
      groups,
    };
  },

  component: Home,
});

function Home() {
  const state = Route.useLoaderData();
  const { groups } = state;
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
      <DashboardStats />
      <RecentTasks />
      <GroupsOverview groups={groups} />
    </PageWrap>
  );
}
