import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface Props {
  searchQuery: string
  onSearch: (value: string) => void
}

function SearchInput({ searchQuery, onSearch }: Props) {
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
        onChange={(e) => onSearch(e.target.value)}
        className='pl-8'
      />
      <Search className='pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50' />
    </form>
  )
}

export default SearchInput
