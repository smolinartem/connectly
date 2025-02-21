import { Outlet } from 'react-router'
import AppSidebar from './components/sidebar/app-sidebar'
import { SidebarProvider } from './components/ui/sidebar'

export default function Root() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='w-full flex flex-col'>
        <main className='grow p-4'>
          <Outlet />
        </main>
        <footer className='w-full h-12 border-t flex items-center justify-center text-sm'>
          krutopognali 2025
        </footer>
      </div>
    </SidebarProvider>
  )
}
