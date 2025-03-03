import { useParams } from 'react-router-dom'
import useContactStore from '@/store/contactStore'

import BackToTableButton from '@/components/shared/back-to-table-button'
import ContactCard from '@/components/shared/contact-card'
import ContactNotes from '@/components/shared/contact-notes'
import NotesTextArea from '@/components/shared/notes-textarea'

export default function ContactDetails() {
  const { id } = useParams<{ id: string }>()

  const { contacts } = useContactStore()
  const contact = contacts.find((c) => c.id === id)

  if (!id || !contact) {
    return <div>Контакт не найден</div>
  }

  return (
    <section className='flex gap-6 p-6'>
      <div className='max-w-[550px] w-full'>
        <BackToTableButton />
        <ContactCard contact={contact} />
        <NotesTextArea contact={contact} />
      </div>
      <ContactNotes contact={contact} />
    </section>
  )
}
