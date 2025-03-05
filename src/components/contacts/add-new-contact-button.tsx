import { useState } from 'react'
import { Button } from '../ui/button'
import AddContactDialog from '../dialogs/add-contact-dialog'

export default function AddNewContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <AddContactDialog open={isOpen} onClose={() => setIsOpen(false)} />}
      <Button onClick={() => setIsOpen(true)} variant='outline'>
        Add New Contact
      </Button>
    </>
  )
}
