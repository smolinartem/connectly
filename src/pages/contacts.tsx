import ContactsMain from '@/components/shared/contacts-main'
import ContactsActionTabs from '@/components/shared/contacts-action-tabs'

import useTabStore from '@/store/tabStore'
import ContactForm from '@/components/shared/contact-form'

export default function Contacts() {
  const { activeTab } = useTabStore()

  return (
    <section className='p-4'>
      <ContactsActionTabs />

      {activeTab === 'table' && <ContactsMain />}

      {activeTab === 'form' && <ContactForm />}
    </section>
  )
}
