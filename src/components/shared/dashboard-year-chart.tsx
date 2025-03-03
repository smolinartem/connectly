import { ContactType } from '@/types/index.types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Label, Pie, PieChart } from 'recharts'
import { getContactsByYear } from '@/shared/helpers'

interface Props {
  classname?: string
  contacts: ContactType[]
}

/* const chartData = [
  { name: '2023', value: 11, fill: 'var(--color-2023)' },
  { name: '2024', value: 12, fill: 'var(--color-2024)' },
  { name: '2025', value: 12, fill: 'var(--color-2025)' },
] */

const chartConfig = {
  contacts: {
    label: 'Contacts',
  },
  '2023': {
    label: '2023',
    color: '#86efac',
  },
  '2024': {
    label: '2024',
    color: '#4ade80',
  },
  '2025': {
    label: '2025',
    color: '#22c55e',
  },
} satisfies ChartConfig

export default function DashboardYearCart({ classname, contacts }: Props) {
  const chartData = getContactsByYear(contacts)

  return (
    <Card className={classname}>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Stats by year</CardTitle>
        <CardDescription>2023 - 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[300px]'>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey='value' nameKey='name' innerRadius={70} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {contacts.length.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Contacts
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>

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
