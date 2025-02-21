import { NavLink } from 'react-router'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar'
import { LayoutDashboard, Settings, UserRound, type LucideIcon } from 'lucide-react'

interface Link {
  path: string
  label: string
  icon: LucideIcon
}

const SIDEBAR_LINKS: Link[] = [
  {
    path: 'contacts',
    label: 'Contacts',
    icon: UserRound,
  },
  {
    path: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    path: 'settings',
    label: 'Settings',
    icon: Settings,
  },
]

export default function SidebarNav() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {SIDEBAR_LINKS.map((link) => (
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild>
                <NavLink to={link.path}>
                  <div className='flex aspect-square size-8 items-center justify-center rounded-md border border-stone-800'>
                    <link.icon className='size-4' />
                  </div>
                  <span>{link.label}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
