import ContactsTable from './contacts-table'
import Pagination from './pagination'
import SearchInput from './search-input'
import StatusSelect from './status-select'
import { Button } from '../ui/button'

import usePagination from '@/hooks/usePagination'
import useFilteredContacts from '@/hooks/useFilteredContacts'

import DateOrderSelect from './date-order-select'
import useContactStore from '@/store/contactStore'
import { useState } from 'react'
import AddContactDialog from '../dialogs/add-contact-dialog'

function ContactsMain() {
  const [isAddContactDialog, setIsAddContactDialog] = useState(false)
  const { contacts } = useContactStore()

  const {
    filteredContacts,
    searchQuery,
    selectedStatus,
    sortOrder,
    handleSearch,
    handleSelect,
    handleDateSort,
    resetFilters,
  } = useFilteredContacts({ contacts })

  const { currentItems, currentPage, totalPages, setCurrentPage } = usePagination({
    items: filteredContacts,
    itemsPerPage: 10,
  })

  return (
    <>
      {isAddContactDialog && (
        <AddContactDialog open={isAddContactDialog} onClose={() => setIsAddContactDialog(false)} />
      )}
      <div className='w-full flex gap-5'>
        <Button onClick={() => setIsAddContactDialog(true)} variant='outline'>
          Add New Contact
        </Button>
        <SearchInput searchQuery={searchQuery} onSearch={handleSearch} />
        <StatusSelect selectedStatus={selectedStatus} onSelect={handleSelect} />
        <DateOrderSelect selectedOrder={sortOrder} onSelect={handleDateSort} />
        <Button className='font-normal' onClick={resetFilters} variant='outline'>
          Reset filters
        </Button>
      </div>
      <ContactsTable contacts={currentItems} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  )
}

export default ContactsMain
