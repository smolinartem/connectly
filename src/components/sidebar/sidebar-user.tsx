import { Link } from 'react-router'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { HandMetal } from 'lucide-react'

export default function SidebarUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className='hover:text-blue-600 active:text-blue-600' size='lg' asChild>
          <Link className='flex items-center gap-2 text-blue-600' to='/'>
            <div className='flex aspect-square items-center justify-center size-8 rounded-md border border-blue-600'>
              <HandMetal strokeWidth={1.5} className='size-4' />
            </div>
            <span className='block font-light leading-none'>krutopognali</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
