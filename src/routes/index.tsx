// src/routes/index.tsx
import PageWrap from "@/components/page-wrap";
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
      buttons={[{ text: "New Task", icon: Plus, onClick: () => {} }]}
    >
      <Button>Test</Button>
    </PageWrap>
  );
}
