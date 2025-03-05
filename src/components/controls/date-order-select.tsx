import { memo } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useControlStore from '@/store/controlStore'

export default memo(function DateOrderSelect() {
  console.log('date select')

  const selectedOrder = useControlStore((state) => state.selectedOrder)
  const setSelectedOrder = useControlStore((state) => state.setSelectedOrder)

  return (
    <Select onValueChange={(value) => setSelectedOrder(value)} value={selectedOrder}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Filter by date' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='asc'>Date ascending</SelectItem>
          <SelectItem value='desc'>Date descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
})
