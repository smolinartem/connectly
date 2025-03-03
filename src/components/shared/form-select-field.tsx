import { Controller } from 'react-hook-form'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

import { FormSelectType } from '@/types/form.types'

export default function FormSelectField({
  className,
  name,
  label,
  placeholder,
  control,
  error,
  items,
}: FormSelectType) {
  return (
    <fieldset className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Label>
            {label}
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent id='status'>
                {items.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
        )}
      />
      <span className='block h-4 text-red-500 text-xs mt-1'>{error ? error.message : ''}</span>
    </fieldset>
  )
}
