import { Link } from 'react-router'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Box } from 'lucide-react'

export default function SidebarLogo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className='hover:text-blue-600 active:text-blue-600' size='lg' asChild>
          <Link className='flex items-center gap-2 text-blue-600' to='/'>
            <div className='flex aspect-square items-center justify-center size-8 rounded-md border border-blue-600'>
              <Box className='size-4' />
            </div>
            <div>
              <span className='block font-light text-lg leading-none'>connectly</span>
              <span className='block font-light text-sm'>v2.0</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
