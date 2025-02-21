import { useState } from 'react'
import ContactsForm from '@/components/contacts/contacts-form'
import ContactsTable from '@/components/contacts/contacts-table'
import { cn } from '@/lib/utils'

export default function ContactsPage() {
  const [action, setAction] = useState<'form' | 'table'>('table')
  return (
    <section>
      <div className='flex border border-blue-600 rounded-md max-w-[400px] p-1.5'>
        <button
          className={cn(
            action === 'form' ? 'border border-blue-600' : '',
            'rounded-md p-2 w-full cursor-pointer text-amber-500'
          )}
          onClick={() => setAction('form')}
        >
          Contact Form
        </button>
        <button
          className={cn(
            action === 'table' ? 'border border-blue-600' : '',
            'rounded-md p-2 w-full cursor-pointer'
          )}
          onClick={() => setAction('table')}
        >
          Contacts Table
        </button>
      </div>
      {action === 'form' && <ContactsForm />}
      {action === 'table' && <ContactsTable />}
    </section>
  )
}
