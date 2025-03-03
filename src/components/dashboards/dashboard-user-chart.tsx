import { getResourceStats } from '@/shared/helpers'
import { ContactType } from '@/types/index.types'

export default function DashboardUserChart({ contacts }: { contacts: ContactType[] }) {
  const chartData = getResourceStats(contacts)
  console.log(chartData)

  const calcWidth = (amount: number): string => 30 * amount + 'px'

  return (
    <div className='border shadow rounded-xl p-6'>
      <h3>User Stats by resources</h3>
      <ul className='mt-2 flex flex-col gap-2'>
        {chartData.map((item) => (
          <li key={item.name} className='flex items-center gap-4 w-full'>
            <span
              className={`block bg-green-600 text-white py-1 px-2 text-sm shrink-0 rounded-sm w-[${calcWidth(
                item.contacts
              )}]`}
            >
              {item.name}
            </span>
            <span className='block'>{item.contacts}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
