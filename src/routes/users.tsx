import PageWrap from "@/components/page-wrap";
import UserTable from "@/components/users-table";
import { userQueryOptions } from "@/lib/server/users";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/users")({
  loader: async ({ context }) => {
    const { queryClient } = context;
    queryClient.ensureQueryData(userQueryOptions());
  },
  component: RouteComponent,
});

function RouteComponent() {
  const userQuery = useSuspenseQuery(userQueryOptions());

  return (
    <PageWrap
      title="Users"
      subTitle="Manage team members and their permissions"
      buttons={[{ text: "Add User", icon: Plus, onClick: () => {} }]}
    >
      <UserTable users={userQuery.data} />
    </PageWrap>
  );
}
