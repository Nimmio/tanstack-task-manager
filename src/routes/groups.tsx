import GroupCard from "@/components/group-card";
import PageWrap from "@/components/page-wrap";
import { getGroups, groupsQueryOptions } from "@/lib/server/groups";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/groups")({
  loader: async ({ context }) => {
    const { queryClient } = context;
    await queryClient.ensureQueryData(groupsQueryOptions());
  },
  component: RouteComponent,
});

function RouteComponent() {
  const groupQuery = useSuspenseQuery(groupsQueryOptions());
  return (
    <PageWrap
      title="Groups"
      subTitle="Organize your tasks into groups and track progress"
      buttons={[{ text: "New Group", onClick: () => {}, icon: Plus }]}
    >
      <div className="grid grid-cols-2 gap-8">
        {groupQuery.data.map((group) => (
          <GroupCard group={group} key={group.id} />
        ))}
      </div>
    </PageWrap>
  );
}
