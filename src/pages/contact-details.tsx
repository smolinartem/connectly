import { useNavigate, useParams } from 'react-router-dom'
import useContactStore from '@/store/contactStore'

import ContactNotes from '@/components/contacts/contact-notes'
import ContactCard from '@/components/contacts/contact-card'
import ContactNotesTextArea from '@/components/contacts/contact-notes-textarea'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function ContactDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { contacts } = useContactStore()
  const contact = contacts.find((c) => c.id === id)

  if (!id || !contact) {
    return <div>Контакт не найден</div>
  }

  return (
    <section className='flex gap-6 p-6'>
      <div className='max-w-[550px] w-full'>
        <Button onClick={() => navigate('/contacts')} className='mb-4' variant='outline'>
          <ArrowLeft />
          Back to table
        </Button>
        <ContactCard contact={contact} />
        <ContactNotesTextArea contact={contact} />
      </div>
      <ContactNotes contact={contact} />
    </section>
  )
}
