import { Outlet } from 'react-router'
import AppSidebar from './components/sidebar/app-sidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

export default function Root() {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <SidebarTrigger /> */}
      <div className='w-full flex flex-col'>
        <header className='w-full px-2 h-12 border-b flex items-center justify-start'>
          <SidebarTrigger className='cursor-pointer' />
        </header>
        <main className='grow p-4'>
          <Outlet />
        </main>
        <footer className='w-full h-12 border-t flex items-center justify-center'>
          krutopognali 2025
        </footer>
      </div>
    </SidebarProvider>
  )
}
