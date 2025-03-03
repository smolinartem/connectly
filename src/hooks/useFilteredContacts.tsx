import { useState } from 'react'
import { ContactType } from '@/types/index.types'
import { parse } from 'date-fns'

interface UseFilteredContactsProps {
  contacts: ContactType[]
}

interface UseFilteredContactsReturn {
  searchQuery: string
  handleSearch: (query: string) => void
  selectedStatus: string
  handleSelect: (status: string) => void
  filteredContacts: ContactType[]
  sortOrder: SortType
  handleDateSort: (order: SortType) => void
  resetFilters: () => void
}

export type SortType = 'asc' | 'desc'

function useFilteredContacts({ contacts }: UseFilteredContactsProps): UseFilteredContactsReturn {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [sortOrder, setSortOrder] = useState<SortType>('desc')

  const parseDate = (dateStr: string): Date => {
    return parse(dateStr, 'dd.MM.yyyy', new Date())
  }

  const filteredContacts = contacts
    .filter((contact) => {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query) ||
        contact.company.toLowerCase().includes(query)

      // Фильтрация по статусу
      const matchesStatus = selectedStatus === 'all' || contact.status === selectedStatus
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      const dateA = parseDate(a.createdAt).getTime()
      const dateB = parseDate(b.createdAt).getTime()
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
    })

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const handleSelect = (value: string) => {
    setSelectedStatus(value)
  }

  const handleDateSort = (value: SortType) => {
    setSortOrder(value)
  }

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedStatus('all')
    setSortOrder('desc')
  }

  return {
    searchQuery,
    handleSearch,
    selectedStatus,
    handleSelect,
    filteredContacts,
    sortOrder,
    handleDateSort,
    resetFilters,
  }
}

export default useFilteredContacts
