import { ContactType } from '@/types/index.types'

import DeleteAlertDialog from '@/components/dialogs/delete-alert-dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import EditContactButton from './edit-contact-button'
import { CONTACT_FIELD_CONFIGS } from '@/shared/contact-field-config'

interface Props {
  contact: ContactType
}

export default function ContactCard({ contact }: Props) {
  console.log(contact)

  return (
    <Card>
      <CardHeader className='flex flex-row items-end justify-between'>
        <CardTitle>Contact Details</CardTitle>
        <div className='flex gap-2'>
          <EditContactButton contact={contact} />
          <DeleteAlertDialog id={contact.id} />
        </div>
      </CardHeader>
      <CardContent className='flex gap-2'>
        <ul>
          {CONTACT_FIELD_CONFIGS.map(({ key, label, format }) => {
            const value = contact[key]

            if (!value) return null

            return (
              <li key={key}>
                <strong>{label}:</strong> {format ? format(value) : value}
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
