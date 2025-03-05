import useControlStore from '@/store/controlStore'
import { Button } from '../ui/button'

export default function ResetFiltersButton() {
  const { resetFilters } = useControlStore()

  return (
    <Button className='font-normal' onClick={resetFilters} variant='outline'>
      Reset filters
    </Button>
  )
}
