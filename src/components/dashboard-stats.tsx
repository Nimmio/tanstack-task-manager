import React from "react";
import DashboardStatsCard from "./dashboard-stats-card";
import { CheckSquare, FolderOpen } from "lucide-react";
import { m } from "@/paraglide/messages";
import { Progress } from "./ui/progress";
import { getCompletionRate } from "@/lib/tasks";

interface DashboardStatsProps {
  totalTasksCount: number;
  completedtasksCount: number;
  groupsCount: number;
  usersCount: number;
}

const DashboardStats = ({
  totalTasksCount,
  completedtasksCount,
  groupsCount,
  usersCount,
}: DashboardStatsProps) => {
  const completionRate = getCompletionRate({
    allTasksCount: totalTasksCount,
    completedTasksCount: completedtasksCount,
  });
  return (
    <div className="grid grid-cols-4 gap-8">
      <DashboardStatsCard
        title={m.new_round_bird_read()}
        Icon={CheckSquare}
        main={totalTasksCount.toString()}
        sub={m.flaky_quaint_bee_cuddle({ count: completedtasksCount })}
      />
      <DashboardStatsCard
        title={m.short_knotty_donkey_pout()}
        Icon={FolderOpen}
        main={groupsCount.toString()}
        sub="Active groups"
      />
      <DashboardStatsCard
        title={m.grand_strong_tapir_arrive()}
        Icon={FolderOpen}
        main={usersCount.toString()}
        sub="Active users"
      />
      <DashboardStatsCard
        title={m.left_few_llama_fetch()}
        Icon={FolderOpen}
        main={`${completionRate}%`}
        sub={<Progress value={completionRate} />}
      />
    </div>
  );
};

export default DashboardStats;
