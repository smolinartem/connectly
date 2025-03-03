import { useState } from 'react'
import { ContactType } from '@/types/index.types'
import { SOURCES_NAMES } from '@/shared/constants'
import { Pencil } from 'lucide-react'

import EditContactDialog from '@/components/dialogs/edit-contact-dialog'
import DeleteAlertDialog from '@/components/dialogs/delete-alert-dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Props {
  contact: ContactType
}

function ContactCard({ contact }: Props) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  return (
    <Card>
      {isEditDialogOpen && (
        <EditContactDialog
          contact={contact}
          open={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
        />
      )}
      <CardHeader className='flex flex-row items-end justify-between'>
        <CardTitle>Contact Details</CardTitle>
        <div className='flex gap-2'>
          <Button onClick={() => setIsEditDialogOpen(true)} variant='outline' size='icon'>
            <Pencil />
          </Button>
          <DeleteAlertDialog id={contact.id} />
        </div>
      </CardHeader>
      <CardContent className='flex gap-2'>
        <div>
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Company:</strong> {contact.company}
          </p>
          <p>
            <strong>CreatedAt:</strong> {contact.createdAt}
          </p>
          <p>
            <strong>Lead Resource:</strong> {SOURCES_NAMES[contact.resource]}
          </p>
          <p>
            <strong>Status:</strong> {contact.status}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ContactCard
