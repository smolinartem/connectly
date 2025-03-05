import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormValues } from '@/lib/contactSchema'

import useContactStore from '@/store/contactStore'
import { INPUTS, LEAD_SOURCES, STATUS_SELECT } from '@/shared/constants'

import { Button } from '@/components/ui/button'
import FormInputField from './form-input-field'
import FormSelectField from './form-select-field'

interface Props {
  onClose: () => void
}

export default function AddContactForm({ onClose }: Props) {
  const { addContact } = useContactStore()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    const id = nanoid(9)
    const date = new Date().toLocaleDateString()
    const initialNote = {
      date: date,
      message: 'Contact was created',
    }
    const contact = { ...values, id: id, createdAt: date, updatedAt: date, notes: [initialNote] }

    addContact(contact)
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
        Submit
      </Button>
    </form>
  )
}
