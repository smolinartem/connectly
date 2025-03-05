import { useEffect } from 'react'
import useContacts from '@/hooks/use-contacts'
import useContactStore from '@/store/contactStore'

import Controls from '@/components/controls/controls'
import ContactsTable from '@/components/contacts/contacts-table'
import Pagination from '@/components/controls/pagination'
import AddNewContactButton from '@/components/contacts/add-new-contact-button'

export default function Contacts() {
  const { contacts, updateContacts } = useContactStore()

  useEffect(() => {
    updateContacts()
  }, [updateContacts])

  const { filteredContacts, currentItems, currentPage, totalPages, setCurrentPage } = useContacts(
    contacts,
    10
  )

  return (
    <section className='p-4'>
      <div className='w-full flex gap-5'>
        <AddNewContactButton />
        <Controls />
      </div>
      <ContactsTable contacts={currentItems} />
      {filteredContacts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  )
}
