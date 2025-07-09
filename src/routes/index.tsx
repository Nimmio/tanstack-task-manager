// src/routes/index.tsx
import DashboardStats from "@/components/dashboard-stats";
import PageWrap from "@/components/page-wrap";
import RecentTasks from "@/components/recent-task";
import { Button } from "@/components/ui/button";
import { m } from "@/paraglide/messages";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

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
    </PageWrap>
  );
}
