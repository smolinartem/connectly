import { Button } from '@/components/ui/button'
import ContactImage from '@/contact.png'
import { contacts } from '@/shared/constants'
import { saveContactsToLocalStorage } from '@/store/contactStore'

export default function HomePage() {
  const handleAddContacts = () => {
    saveContactsToLocalStorage(contacts)
  }
  return (
    <section className='p-4'>
      <h1 className='text-xl mb-5'>Welcome to Connectly CRM</h1>

      <div>In order to add contacts list to your LocalStorage, press 'Add Contacts' button</div>
      <div className='mb-5'>Example of contact structure:</div>
      <div className='max-w-[700px] mb-5'>
        <img src={ContactImage} />
      </div>
      <Button onClick={() => handleAddContacts()} variant='outline'>
        Add Contacts
      </Button>
    </section>
  )
}
