import { ContactType } from '@/types/index.types'

import { create } from 'zustand'

interface ContactStore {
  contacts: ContactType[]
  updateContacts: () => void
  addContact: (contact: ContactType) => void
  updateContact: (id: string, updatedContact: Partial<ContactType>) => void
  deleteContact: (id: string) => void
}

// Функция для получения контактов из localStorage
export const getInitialContacts = (): ContactType[] => {
  const storedContacts = localStorage.getItem('contacts')
  return storedContacts ? JSON.parse(storedContacts) : []
}

// Функция для сохранения контактов в localStorage
export const saveContactsToLocalStorage = (contacts: ContactType[]) => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}

const useContactStore = create<ContactStore>((set) => ({
  contacts: getInitialContacts(),
  updateContacts: () => set({ contacts: getInitialContacts() }),

  // Добавление контакта
  addContact: (contact) =>
    set((state) => {
      const newContacts = [contact, ...state.contacts]
      saveContactsToLocalStorage(newContacts) // Сохраняем в localStorage
      return { contacts: newContacts }
    }),

  // Обновление контакта
  updateContact: (id, updatedContact) =>
    set((state) => {
      const newContacts = state.contacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      )
      saveContactsToLocalStorage(newContacts) // Сохраняем в localStorage
      return { contacts: newContacts }
    }),

  // Удаление контакта
  deleteContact: (id) =>
    set((state) => {
      const newContacts = state.contacts.filter((contact) => contact.id !== id)
      saveContactsToLocalStorage(newContacts) // Сохраняем в localStorage
      return { contacts: newContacts }
    }),
}))

export default useContactStore
