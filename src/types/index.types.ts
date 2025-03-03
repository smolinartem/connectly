interface Note {
  date: string // new Date().toLocalDateString()
  message: string
}

type Resource = 'ref' | 'search' | 'adv' | 'expo' | 'call' | 'website' | 'email' | 'other'
type Status = 'active' | 'closed' | 'potential'

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
