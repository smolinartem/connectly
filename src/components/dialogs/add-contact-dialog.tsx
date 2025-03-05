import AddContactForm from '@/components/forms/add-contact-form'
import DialogWrapper from './dialog-wrapper'

interface Props {
  open: boolean
  onClose: () => void
}
export default function AddContactDialog({ open, onClose }: Props) {
  return (
    <DialogWrapper
      title='Add New Contact'
      description={`Fill out the form to add a new contact to the table and database. Click save when you're done.`}
      open={open}
      onClose={onClose}
    >
      <AddContactForm onClose={onClose} />
    </DialogWrapper>
  )
}
