import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'

export default function Root() {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='w-full'>
        <Outlet />
      </main>
    </div>
  )
}
