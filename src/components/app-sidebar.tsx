import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { m } from "@/paraglide/messages";
import { Link } from "@tanstack/react-router";
import { CheckSquare, FolderOpen, Home, LucideIcon, Users } from "lucide-react";
import { ReactNode } from "react";

type item = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

const items: Array<item> = [
  { title: m.dirty_round_hare_comfort(), url: "/", icon: Home },
  { title: m.aqua_civil_salmon_sing(), url: "/tasks", icon: CheckSquare },
  { title: m.short_knotty_donkey_pout(), url: "/groups", icon: FolderOpen },
  { title: m.antsy_known_badger_chop(), url: "/users", icon: Users },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url}>
                  {item.icon && <item.icon />}
                  <span> {item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
