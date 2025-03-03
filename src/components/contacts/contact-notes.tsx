import { ScrollArea } from '../ui/scroll-area'
import { ContactType } from '@/types/index.types'

export default function ContactNotes({ contact }: { contact: ContactType }) {
  return (
    <div className='w-full'>
      <h2 className='text-xl font-bold h-[36px] mb-4'>Notes</h2>
      <ScrollArea className='h-[calc(100vh-200px)] bg-white p-6 rounded-lg border shadow'>
        {contact.notes.map((note, index) => (
          <div key={index} className='mb-4'>
            <p className='text-xs text-gray-500'>{note.date}</p>
            <p>{note.message}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
