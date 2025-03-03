import useContactStore from '@/store/contactStore'

import DashboardYearCart from '@/components/dashboards/dashboard-year-chart'
import DashboardStatusChart from '@/components/dashboards/dashboard-status-chart'
import DashboardResourceChart from '@/components/dashboards/dashboard-resource-chart'

export default function Dashboard() {
  const { contacts } = useContactStore()

  return (
    <section className='p-6 w-full'>
      <div className='grid grid-cols-2 gap-4'>
        <DashboardYearCart contacts={contacts} />
        <DashboardStatusChart contacts={contacts} />
        <DashboardResourceChart contacts={contacts} />
      </div>
    </section>
  )
}
