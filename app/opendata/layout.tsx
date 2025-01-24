import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider, SidebarTrigger,
  SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

function AppSidebar() {
  return (
    <Sidebar variant="sidebar" className="z-0 bg-slate-50 dark:bg-sky-950">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>OpenData</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuSubButton asChild>
                  <a href="#">Data</a>
                </SidebarMenuSubButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a className="font-bold" href="/opendata">Audits</a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default function OpenDataLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pt-4">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger className="lg:hidden" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  )
}