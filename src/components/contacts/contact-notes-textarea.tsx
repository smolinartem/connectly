import { useState } from 'react'
import { ContactType } from '@/types/index.types'
import useContactStore from '@/store/contactStore'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactNotesTextArea({ contact }: { contact: ContactType }) {
  const [newNote, setNewNote] = useState('')
  const { updateContact } = useContactStore()

  const handleAddNote = () => {
    if (newNote.trim()) {
      const currentDate = new Date().toLocaleDateString()
      const updatedContact = {
        ...contact,
        updatedAt: currentDate,
        notes: [
          {
            date: currentDate,
            message: newNote,
          },
          ...contact.notes,
        ],
      }
      updateContact(contact.id, updatedContact)
      setNewNote('')
    }
  }

  return (
    <div className='flex flex-col gap-2 items-end'>
      <Textarea
        placeholder='Type your notes here.'
        className='mt-6 min-h-[100px]'
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <Button onClick={handleAddNote}>Submit</Button>
    </div>
  )
}
