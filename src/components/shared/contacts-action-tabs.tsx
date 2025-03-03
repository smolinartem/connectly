import { cn } from '@/lib/utils'
import useTabStore from '@/store/tabStore'

export default function ContactsActionTabs() {
  const { activeTab, setActiveTab } = useTabStore()

  return (
    <div className='mb-4 bg-neutral-100 flex items-center gap-1 p-1 p w-max rounded-md'>
      <button
        onClick={() => setActiveTab('table')}
        className={cn(
          activeTab === 'table' ? 'bg-white font-medium text-neutral-800' : 'bg-neutral-100',
          'text-sm  h-full p-2 rounded-md border'
        )}
      >
        Contacts Table
      </button>
      <button
        onClick={() => setActiveTab('form')}
        className={cn(
          activeTab === 'form' ? 'bg-white font-medium text-neutral-800' : 'bg-neutral-100',
          'text-sm  h-full p-2 rounded-md border'
        )}
      >
        Add New Contact
      </button>
    </div>
  )
}
