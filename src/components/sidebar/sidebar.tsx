import { Box } from 'lucide-react'
import { Link, NavLink } from 'react-router'

const SIDEBAR_LINKS = [
  {
    path: 'contacts',
    name: 'Contacts',
  },
  {
    path: 'dashboard',
    name: 'Dashboard',
  },
  {
    path: 'settings',
    name: 'Settings',
  },
]

export default function SideBar() {
  return (
    <aside className='flex flex-col gap-8 p-6 w-64 border-r border-blue-600'>
      <Link className='flex items-center gap-2 hover:bg-stone-100' to='/'>
        <div className='flex items-center justify-center size-10 rounded-md border border-blue-600 text-blue-600'>
          <Box strokeWidth={1} />
        </div>
        <span className='block text-xl'>
          connectly<span className='block text-sm'>v2.0</span>
        </span>
      </Link>
      <nav className='flex flex-col gap-2'>
        {SIDEBAR_LINKS.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
