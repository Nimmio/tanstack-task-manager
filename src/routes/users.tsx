import PageWrap from "@/components/page-wrap";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageWrap
      title="Users"
      subTitle="Manage team members and their permissions"
      buttons={[{ text: "Add User", icon: Plus, onClick: () => {} }]}
    >
      Yadda
    </PageWrap>
  );
}
