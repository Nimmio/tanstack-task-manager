import GroupCard from "@/components/group-card";
import PageWrap from "@/components/page-wrap";
import { getGroups } from "@/lib/server/groups";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/groups")({
  loader: async () => {
    const groups = await getGroups();
    return {
      groups,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const state = Route.useLoaderData();
  const { groups } = state;
  return (
    <PageWrap
      title="Groups"
      subTitle="Organize your tasks into groups and track progress"
      buttons={[{ text: "New Group", onClick: () => {}, icon: Plus }]}
    >
      <div className="grid grid-cols-3 gap-8">
        {groups.map((group) => (
          <GroupCard group={group} key={group.id} />
        ))}
      </div>
    </PageWrap>
  );
}
