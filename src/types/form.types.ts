import { ContactFormValues } from '@/lib/contactSchema'
import { Control, FieldError } from 'react-hook-form'

type FormSelectNames = 'resource' | 'status'
type FormInputName = 'name' | 'email' | 'phone' | 'company' | 'status'

interface SelectItem {
  id: number
  value: string
  name: string
  decription?: string
}

export interface FormSelectType {
  className?: string
  name: FormSelectNames
  label: string
  placeholder: string
  control: Control<ContactFormValues>
  error: FieldError | undefined
  items: SelectItem[]
}

export interface FormInputType {
  className?: string
  name: FormInputName
  label: string
  placeholder: string
  control: Control<ContactFormValues>
  error: FieldError | undefined
}

export type InputItem = Omit<FormInputType, 'control' | 'error' | 'className'>
