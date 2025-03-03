import { cn } from '@/lib/utils'
import { UserRound, LayoutDashboard, Settings, type LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface Link {
  path: string
  label: string
  icon: LucideIcon
}

const SIDEBAR_LINKS: Link[] = [
  {
    path: '/contacts',
    label: 'Contacts',
    icon: UserRound,
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: Settings,
  },
]

export default function SidebarNav() {
  return (
    <nav className='mt-10'>
      <ul className='flex flex-col gap-3'>
        {SIDEBAR_LINKS.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                cn(
                  isActive ? 'bg-neutral-200' : '',
                  'flex items-center gap-2 hover:bg-neutral-100 rounded-lg shrink-0'
                )
              }
            >
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg border border-blue-600 text-blue-500'>
                <item.icon className='size-4' />
              </div>
              <span className='text-sm'>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
