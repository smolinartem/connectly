import SidebarLogo from './sidebar-logo'
import SidebarNav from './sidebar-nav'

export default function Sidebar() {
  return (
    <aside className='bg-neutral-50 border-r h-screen w-[200px] p-4 shrink-0'>
      <SidebarLogo />
      <SidebarNav />
    </aside>
  )
}
