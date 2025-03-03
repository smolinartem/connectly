import useContactStore from '@/store/contactStore'

import DashboardYearCart from '@/components/shared/dashboard-year-chart'
import DashboardStatusChart from '@/components/shared/dashboard-status-chart'
import DashboardResourceChart from '@/components/shared/dashboard-resource-chart'
import DashboardUserChart from '@/components/shared/dashboard-user-chart'

export default function Dashboard() {
  const { contacts } = useContactStore()

  return (
    <section className='p-6 w-full'>
      <div className='grid grid-cols-2 gap-4'>
        <DashboardYearCart contacts={contacts} />
        <DashboardStatusChart contacts={contacts} />
        <DashboardResourceChart contacts={contacts} />
      </div>
      <DashboardUserChart contacts={contacts} />
    </section>
  )
}
