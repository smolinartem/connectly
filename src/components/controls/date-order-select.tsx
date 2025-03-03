import type { SortType } from '@/hooks/useFilteredContacts'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Props {
  onSelect: (order: SortType) => void
  selectedOrder: SortType
}

export default function DateOrderSelect({ onSelect, selectedOrder }: Props) {
  return (
    <Select onValueChange={(value) => onSelect(value as SortType)} value={selectedOrder}>
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
}
