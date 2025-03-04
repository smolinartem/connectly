import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ContactImage from '@/contact.png'
import { contacts } from '@/shared/constants'
import { saveContactsToLocalStorage } from '@/store/contactStore'

export default function HomePage() {
  const handleAddContacts = () => {
    saveContactsToLocalStorage(contacts)
  }
  return (
    <section className='p-4'>
      <div className='grid grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl'>Welcome to Connectly CRM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='mb-5'>
              <h2 className='mb-2'>Functionality</h2>
              <ul className='flex flex-col gap-1 list-decimal ml-3 list-inside'>
                <li>add, edit and delete contacts</li>
                <li>display all contacts in a table view</li>
                <li>search for contacts by name or email</li>
                <li>filter contacts by status</li>
                <li>sort contacts by date</li>
                <li>pagination</li>
                <li>view contact details in a new page</li>
                <li>add notes for each contact</li>
                <li>view stats in the dashboard</li>
              </ul>
            </div>
            <div>
              <h2 className='mb-2'>Stack</h2>
              <ul className='flex flex-col gap-1 list-decimal ml-3 list-inside'>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React Hook Form</li>
                <li>React Router DOM</li>
                <li>Shadcn</li>
                <li>Zod</li>
                <li>Zustand</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Contacts to LocalStorage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='mb-2'>
              In connectly v1.0 I use LocalStorageAPI, so In order to add contacts list to your
              LocalStorage, press 'Add Contacts'
            </div>
            <div className='mb-5'>Example of contact structure:</div>
            <div className=' mb-5'>
              <img src={ContactImage} />
            </div>
            <Button onClick={() => handleAddContacts()} variant='outline'>
              Add Contacts
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
