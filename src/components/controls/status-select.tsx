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

const STATUS_ITEMS = [
  {
    name: 'All statuses',
    value: 'all',
  },
  {
    name: 'Active',
    value: 'active',
  },
  {
    name: 'Potential',
    value: 'potential',
  },
  {
    name: 'Closed',
    value: 'closed',
  },
]

export default memo(function StatusSelect() {
  console.log('status select')

  const selectedStatus = useControlStore((state) => state.selectedStatus)
  const setSelectedStatus = useControlStore((state) => state.setSelectedStatus)

  return (
    <Select onValueChange={(value) => setSelectedStatus(value)} value={selectedStatus}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Status select' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {STATUS_ITEMS.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
})
