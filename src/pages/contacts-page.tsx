import { useState } from 'react'
import { cn } from '@/lib/utils'
import ContactsForm from '@/components/contacts/contacts-form'
import ContactsTable from '@/components/contacts/contacts-table'
import { Button } from '@/components/ui/button'
import { Plus, TableProperties } from 'lucide-react'

export default function ContactsPage() {
  const [action, setAction] = useState<'form' | 'table'>('table')
  return (
    <section>
      <div className='flex gap-4'>
        <Button
          className={cn(action === 'form' && 'border-stone-800', 'cursor-pointer')}
          onClick={() => setAction('form')}
          variant='outline'
        >
          <Plus /> Add New Contact
        </Button>
        <Button
          className={cn(action === 'table' && 'border-stone-800', 'cursor-pointer')}
          onClick={() => setAction('table')}
          variant='outline'
        >
          <TableProperties /> Contacts Table
        </Button>
      </div>
      {action === 'form' && <ContactsForm />}
      {action === 'table' && <ContactsTable />}
    </section>
  )
}
