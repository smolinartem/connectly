import { useEffect, useState } from 'react'
import usePagination from '@/hooks/usePagination'
import useFilteredContacts from '@/hooks/useFilteredContacts'
import useContactStore from '@/store/contactStore'

import AddContactDialog from '@/components/dialogs/add-contact-dialog'
import SearchInput from '@/components/controls/search-input'
import StatusSelect from '@/components/controls/status-select'
import DateOrderSelect from '@/components/controls/date-order-select'
import ContactsTable from '@/components/contacts/contacts-table'
import Pagination from '@/components/controls/pagination'
import { Button } from '@/components/ui/button'
import ResetFiltersButton from '@/components/controls/reset-filters-button'

export default function Contacts() {
  const [isAddContactDialog, setIsAddContactDialog] = useState(false)

  const { contacts, updateContacts } = useContactStore()

  useEffect(() => {
    updateContacts()
  }, [updateContacts])

  const filteredContacts = useFilteredContacts({ contacts })

  const { currentItems, currentPage, totalPages, setCurrentPage } = usePagination({
    items: filteredContacts,
    itemsPerPage: 10,
  })

  return (
    <section className='p-4'>
      {isAddContactDialog && (
        <AddContactDialog open={isAddContactDialog} onClose={() => setIsAddContactDialog(false)} />
      )}
      <div className='w-full flex gap-5'>
        <Button onClick={() => setIsAddContactDialog(true)} variant='outline'>
          Add New Contact
        </Button>
        <SearchInput />
        <StatusSelect />
        <DateOrderSelect />
        <ResetFiltersButton />
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
