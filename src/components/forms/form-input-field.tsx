import { Controller } from 'react-hook-form'
import { FormInputType } from '@/types/form.types'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function FormInputField({
  className,
  name,
  label,
  placeholder,
  control,
  error,
}: FormInputType) {
  return (
    <fieldset className={className}>
      <Label>
        {label}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Input {...field} placeholder={placeholder} className='mt-1' />}
        />
      </Label>
      <span className='block h-4 text-red-500 text-xs mt-1'>{error ? error.message : ''}</span>
    </fieldset>
  )
}
