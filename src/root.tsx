import { Outlet } from 'react-router'
import SideBar from './components/sidebar/sidebar'

export default function Root() {
  return (
    <div className='flex h-screen'>
      <SideBar />
      <div className='flex-1 p-4'>
        <Outlet />
      </div>
    </div>
  )
}
