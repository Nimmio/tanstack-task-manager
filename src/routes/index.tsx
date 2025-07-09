// src/routes/index.tsx
import DashboardStats from "@/components/dashboard-stats";
import GroupsOverview from "@/components/groups-overview";
import PageWrap from "@/components/page-wrap";
import { m } from "@/paraglide/messages";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const groups = [
  {
    name: "Frontend Development",
    description: "UI/UX related tasks",
    count: 10,
    percent: 25,
  },
  {
    name: "Backend Development",
    description: "Server-side development",
    count: 10,
    percent: 25,
  },
  {
    name: "DevOps",
    description: "Infrastructure and deployment",
    count: 10,
    percent: 25,
  },
];

function Home() {
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
      <GroupsOverview groups={groups} />
    </PageWrap>
  );
}
