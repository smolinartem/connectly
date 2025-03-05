import useFilteredContacts from './use-filtered-contacts'
import usePagination from './use-pagination'
import { ContactType } from '@/types/index.types'

function useContacts(contacts: ContactType[], itemsPerPage: number) {
  const filteredContacts = useFilteredContacts({ contacts })

  const { currentItems, currentPage, totalPages, setCurrentPage } = usePagination({
    items: filteredContacts,
    itemsPerPage,
  })

  return {
    filteredContacts,
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
  }
}

export default useContacts
