import React from "react";
import DashboardStatsCard from "./dashboard-stats-card";
import { CheckSquare, FolderOpen } from "lucide-react";
import { m } from "@/paraglide/messages";
import { Progress } from "./ui/progress";

interface DashboardStatsProps {}

const DashboardStats = ({}: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <DashboardStatsCard
        title={m.new_round_bird_read()}
        Icon={CheckSquare}
        main="4"
        sub={m.flaky_quaint_bee_cuddle({ count: 2 })}
      />
      <DashboardStatsCard
        title={m.short_knotty_donkey_pout()}
        Icon={FolderOpen}
        main="3"
        sub="Active groups"
      />
      <DashboardStatsCard
        title={m.grand_strong_tapir_arrive()}
        Icon={FolderOpen}
        main="3"
        sub="Active users"
      />
      <DashboardStatsCard
        title={m.left_few_llama_fetch()}
        Icon={FolderOpen}
        main="25%"
        sub={<Progress value={25} />}
      />
    </div>
  );
};

export default DashboardStats;
