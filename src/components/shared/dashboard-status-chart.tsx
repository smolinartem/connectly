import { Pie, PieChart } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

import { getStatusStats } from '@/shared/helpers'
import { ContactType } from '@/types/index.types'

const chartConfig = {
  contacts: {
    label: 'Contacts',
  },
  active: {
    label: 'Active',
    color: '#86efac',
  },
  potential: {
    label: 'Potential',
    color: '#fef08a',
  },
  closed: {
    label: 'Closed',
    color: '#f87171',
  },
} satisfies ChartConfig

interface Props {
  contacts: ContactType[]
}

export default function DashboardStatusChart({ contacts }: Props) {
  const chartData = getStatusStats(contacts)

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Stats by status</CardTitle>
        <CardDescription>2023 - 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[300px]'>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey='value' />
            <ChartLegend
              content={<ChartLegendContent nameKey='name' />}
              className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
