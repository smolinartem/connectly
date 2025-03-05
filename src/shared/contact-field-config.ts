import { ContactType } from '@/types/index.types'
import { SOURCES_NAMES } from './constants'

export type ContactFieldConfig = {
  key: keyof Omit<ContactType, 'notes' | 'updatedAt' | 'id'>
  label: string
  format?: (value: string) => string
}

export const CONTACT_FIELD_CONFIGS: ContactFieldConfig[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'company', label: 'Company' },
  {
    key: 'createdAt',
    label: 'Created At',
  },
  {
    key: 'resource',
    label: 'Lead Resource',
    format: (value) => SOURCES_NAMES[value] || value,
  },
  { key: 'status', label: 'Status' },
]
