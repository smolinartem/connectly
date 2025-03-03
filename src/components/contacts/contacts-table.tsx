import { useNavigate } from 'react-router-dom'
import { ContactType } from '@/types/index.types'
import { SOURCES_NAMES } from '@/shared/constants'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Props {
  contacts: ContactType[]
}

function ContactsTable({ contacts }: Props) {
  const navigate = useNavigate()

  const handleRowClick = (id: string) => {
    navigate(`/contacts/${id}`)
  }

  return (
    <div className='min-h-[410px]'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>CreatedAt</TableHead>
            <TableHead>UpdatedAt</TableHead>
            <TableHead>Lead resource</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              key={contact.id}
              className='cursor-pointer'
              onClick={() => handleRowClick(contact.id)}
            >
              <TableCell className='font-medium'>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell className='font-medium'>{contact.company}</TableCell>
              <TableCell>{contact.createdAt}</TableCell>
              <TableCell>{contact.updatedAt}</TableCell>
              <TableCell>{SOURCES_NAMES[contact.resource]}</TableCell>
              <TableCell>{contact.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default ContactsTable

/* 
  Привет, сегодня я решил добавить контакту поле resource. Мне нужен новый массив контактов с обновлённой информацией.
  {
    id: nanoid(8)
    name: string
    email: string
    phone: формат +79998887722
    company: string
    createdAt: формат new Date().toLocalDateString() '12.02.2025'. Даты используй только прошедшего времени, например прошлый год и начало этого.
    updatedAt: формат new Date().toLocalDateString() '12.02.2025'. Дата равна дате последнего добавленного Notes.
    resource: 'ref' | 'search' | 'adv' | 'expo' | 'call' | 'website' | 'email' | 'other'
    status: 'active' | 'closed' | 'potential'
    notes: массив notes. У каждого контакта есть initialNote: {
      date: формат new Date().toLocalDateString() и равна дата createdAt,
      message: 'Contact was created'
    }. Также добавь несколько дополнительных notes для каждого контакта. Дату используй конечно позднее даты создания (updatedAt), например через пару дней или недель, а в message запиши какой нибудь бизнес процесс, пример: We discussed current prices for office supplies, taking into account delivery costs.
  }
  Напиши пожалуйста массив из 50 контактов, а добавлю его в localStorage.




  export interface ContactType {
    id: string
    name: string
    email: string
    phone: string
    company: string
    createdAt: string
    updatedAt: string
    resource: Resource
    status: Status
    notes: Note[]
  }

  interface Note {
  date: string // new Date().toLocalDateString()
  message: string
}





import React, { useState } from 'react';
import { Button } from 'shadcn';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'shadcn/ui/table';
import { ContactType } from '../types/contact';

interface ContactListProps {
  contacts: ContactType[];
  onDeleteContact: (id: number) => void;
}

export default function ContactList({ contacts, onDeleteContact }: ContactListProps) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof ContactType; direction: 'asc' | 'desc' } | null>(null);

  // Функция для сортировки контактов
  const sortedContacts = React.useMemo(() => {
    if (!sortConfig) return contacts;

    return [...contacts].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [contacts, sortConfig]);

  // Функция для обработки клика по заголовку
  const handleSort = (key: keyof ContactType) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead onClick={() => handleSort('name')}>Имя</TableHead>
          <TableHead onClick={() => handleSort('email')}>Email</TableHead>
          <TableHead onClick={() => handleSort('phone')}>Телефон</TableHead>
          <TableHead onClick={() => handleSort('company')}>Компания</TableHead>
          <TableHead onClick={() => handleSort('status')}>Статус</TableHead>
          <TableHead>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedContacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>{contact.status}</TableCell>
            <TableCell>
              <Button
                onClick={() => onDeleteContact(contact.id)}
                variant="destructive"
                size="sm"
              >
                Удалить
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
*/
