import { ContactType } from '@/types/index.types'
import { parse } from 'date-fns'
import useControlStore from '@/store/controlStore'

interface UseFilteredContactsProps {
  contacts: ContactType[]
}

function useFilteredContacts({ contacts }: UseFilteredContactsProps): ContactType[] {
  const { searchQuery, selectedStatus, selectedOrder } = useControlStore()

  const parseDate = (dateStr: string): Date => {
    return parse(dateStr, 'dd.MM.yyyy', new Date())
  }

  return contacts
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
      return selectedOrder === 'asc' ? dateA - dateB : dateB - dateA
    })
}

export default useFilteredContacts
