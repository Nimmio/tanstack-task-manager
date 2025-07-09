import PageWrap from "@/components/page-wrap";
import TaskFilter from "@/components/tasks-filter";
import { m } from "@/paraglide/messages";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/tasks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageWrap
      title={m.aqua_civil_salmon_sing()}
      subTitle={m.tame_sunny_ape_smile()}
      buttons={[
        { text: m.same_muddy_rooster_approve(), onClick: () => {}, icon: Plus },
      ]}
    >
      <TaskFilter />
    </PageWrap>
  );
}
