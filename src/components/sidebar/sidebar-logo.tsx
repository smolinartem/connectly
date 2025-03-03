import { Box } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SidebarLogo() {
  return (
    <header className='flex items-center gap-2'>
      <Link className='flex items-center gap-2 text-blue-600' to='/'>
        <div className='flex aspect-square items-center justify-center size-8 rounded-md border border-blue-600'>
          <Box className='size-4' />
        </div>
        <div>
          <span className='block font-light text-lg leading-none'>connectly</span>
          <span className='block font-light text-sm'>v1.0</span>
        </div>
      </Link>
    </header>
  )
}
