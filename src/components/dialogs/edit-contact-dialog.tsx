import { ContactType } from '@/types/index.types'

import DialogWrapper from './dialog-wrapper'
import EditContactForm from '../forms/edit-contact-form'

interface Props {
  contact: ContactType
  open: boolean
  onClose: () => void
}

export default function EditContactDialog({ contact, open, onClose }: Props) {
  return (
    <DialogWrapper
      title='Edit Form'
      description={`Make changes to the contact here. Click save when you're done.`}
      open={open}
      onClose={onClose}
    >
      <EditContactForm contact={contact} onClose={onClose} />
    </DialogWrapper>
  )
}
