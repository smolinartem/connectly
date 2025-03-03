import { ContactType } from '@/types/index.types'
import { SOURCES_NAMES } from './constants'

interface ChartData {
  name: string
  value: number
  fill: string
}

export const getContactsByYear = (contacts: ContactType[]): ChartData[] => {
  const yearCounts: { [key: string]: number } = {}

  contacts.forEach((contact) => {
    const year = contact.createdAt.split('.')[2]
    if (yearCounts[year]) {
      yearCounts[year]++
    } else {
      yearCounts[year] = 1
    }
  })

  return Object.keys(yearCounts).map((year) => ({
    name: year,
    value: yearCounts[year],
    fill: `var(--color-${year})`,
  }))
}

export const getStatusStats = (contacts: ContactType[]): ChartData[] => {
  const statusCounts: { [key: string]: number } = {}

  contacts.forEach((contact) => {
    if (statusCounts[contact.status]) {
      statusCounts[contact.status]++
    } else {
      statusCounts[contact.status] = 1
    }
  })

  return Object.keys(statusCounts).map((status) => ({
    name: status,
    value: statusCounts[status],
    fill: `var(--color-${status})`,
  }))
}

interface ResourceChartData {
  name: string
  contacts: number
}

export const getResourceStats = (contacts: ContactType[]): ResourceChartData[] => {
  const resourceCounts: { [key: string]: number } = {}

  contacts.forEach((contact) => {
    if (resourceCounts[contact.resource]) {
      resourceCounts[contact.resource]++
    } else {
      resourceCounts[contact.resource] = 1
    }
  })

  return Object.keys(resourceCounts).map((resource) => ({
    name: SOURCES_NAMES[resource],
    contacts: resourceCounts[resource],
  }))
}
