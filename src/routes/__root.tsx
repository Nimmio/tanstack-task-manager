// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";
import appCss from "@/styles/app.css?url";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { getLocale } from "@/paraglide/runtime";
import { m } from "@/paraglide/messages";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: m.dark_crisp_ladybug_burn(),
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
    }),
    errorComponent: (props) => {
      return (
        <RootDocument>
          <DefaultCatchBoundary {...props} />
        </RootDocument>
      );
    },
    notFoundComponent: () => <NotFound />,
    component: RootComponent,
  }
);

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full p-4">
            <SidebarTrigger />
            {children}
            <TanStackRouterDevtools position="bottom-right" />
            <ReactQueryDevtools buttonPosition="bottom-left" />
          </main>
          <Scripts />
        </SidebarProvider>
      </body>
    </html>
  );
}
