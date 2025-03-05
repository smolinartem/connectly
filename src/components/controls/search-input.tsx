import { memo } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useControlStore from '@/store/controlStore'

export default memo(function SearchInput() {
  console.log('search input')

  const searchQuery = useControlStore((state) => state.searchQuery)
  const setSearchQuery = useControlStore((state) => state.setSearchQuery)

  return (
    <form className='mb-4 max-w-80 w-full relative'>
      <Label htmlFor='search' className='sr-only'>
        Search
      </Label>
      <Input
        id='search'
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='pl-8'
      />
      <Search className='pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50' />
    </form>
  )
})
