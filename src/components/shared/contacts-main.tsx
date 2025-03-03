import ContactsTable from './contacts-table'
import Pagination from './pagination'
import SearchInput from './search-input'
import StatusSelect from './status-select'
import { Button } from '../ui/button'

import usePagination from '@/hooks/usePagination'
import useFilteredContacts from '@/hooks/useFilteredContacts'

import DateOrderSelect from './date-order-select'
import useContactStore from '@/store/contactStore'

function ContactsMain() {
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
      <div className='w-full flex gap-5'>
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
