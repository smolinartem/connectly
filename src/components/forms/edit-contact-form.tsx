import { ContactType } from '@/types/index.types'
import { useForm } from 'react-hook-form'
import { ContactFormValues, contactSchema } from '@/lib/contactSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../ui/button'
import useContactStore from '@/store/contactStore'
import { INPUTS, LEAD_SOURCES, STATUS_SELECT } from '@/shared/constants'
import FormInputField from '../forms/form-input-field'
import FormSelectField from '../forms/form-select-field'

interface Props {
  contact: ContactType
  onClose: () => void
}

export default function EditContactForm({ contact, onClose }: Props) {
  const { updateContact } = useContactStore()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company,
      status: contact.status,
      resource: contact.resource,
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    const updatedAt = new Date().toLocaleDateString()
    updateContact(contact.id, { ...values, updatedAt: updatedAt })
    console.log(contact)
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-6 border rounded-md flex flex-col gap-2'
      autoComplete='off'
      noValidate
    >
      {INPUTS.map((input) => (
        <FormInputField
          key={input.name}
          name={input.name}
          label={input.label}
          placeholder={input.placeholder}
          control={control}
          error={errors[input.name]}
        />
      ))}

      <div className='flex gap-2'>
        <FormSelectField
          className='w-full'
          name='status'
          label='Status'
          placeholder='Choose status'
          control={control}
          error={errors.status}
          items={STATUS_SELECT}
        />

        <FormSelectField
          className='w-full'
          name='resource'
          label='Lead resource'
          placeholder='Choose one'
          control={control}
          error={errors.resource}
          items={LEAD_SOURCES}
        />
      </div>

      <Button className='mt-4' type='submit'>
        Save
      </Button>
    </form>
  )
}
