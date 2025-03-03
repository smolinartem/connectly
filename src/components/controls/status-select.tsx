import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Props {
  selectedStatus: string
  onSelect: (value: string) => void
}

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

export default function StatusSelect({ selectedStatus, onSelect }: Props) {
  return (
    <Select onValueChange={(value) => onSelect(value)} value={selectedStatus}>
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
}
