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

export default function StatusSelect({ selectedStatus, onSelect }: Props) {
  return (
    <Select onValueChange={(value) => onSelect(value)} value={selectedStatus}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Status select' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='all'>All statuses</SelectItem>
          <SelectItem value='active'>Active</SelectItem>
          <SelectItem value='potential'>Potential</SelectItem>
          <SelectItem value='closed'>Closed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
