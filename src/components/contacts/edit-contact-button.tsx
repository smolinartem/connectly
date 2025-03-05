import { ContactType } from '@/types/index.types'
import { useState } from 'react'
import EditContactDialog from '../dialogs/edit-contact-dialog'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'

interface Props {
  contact: ContactType
}
export default function EditContactButton({ contact }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <EditContactDialog contact={contact} open={isOpen} onClose={() => setIsOpen(false)} />
      )}
      <Button onClick={() => setIsOpen(true)} variant='outline' size='icon'>
        <Pencil />
      </Button>
    </>
  )
}
