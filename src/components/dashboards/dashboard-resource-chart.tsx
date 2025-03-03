import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { getResourceStats } from '@/shared/helpers'
import { ContactType } from '@/types/index.types'

const chartConfig = {
  contacts: {
    label: 'Contacts',
    color: '#16a34a',
  },
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig

interface Props {
  contacts: ContactType[]
}

export default function DashboardResourceChart({ contacts }: Props) {
  const chartData = getResourceStats(contacts)

  return (
    <Card className='flex flex-col pb-4'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Stats by resource</CardTitle>
        <CardDescription>2023 - 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout='vertical'
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey='name'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey='contacts' type='number' hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
            <Bar dataKey='contacts' layout='vertical' fill='var(--color-contacts)' radius={4}>
              <LabelList
                dataKey='name'
                position='insideLeft'
                offset={8}
                className='fill-[--color-label]'
                fontSize={12}
              />
              <LabelList
                dataKey='contacts'
                position='right'
                offset={8}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
