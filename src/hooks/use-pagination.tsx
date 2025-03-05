import useControlStore from '@/store/controlStore'
import { useEffect, useState } from 'react'

interface UsePaginationProps<T> {
  items: T[]
  itemsPerPage: number
}

interface UsePaginationReturn<T> {
  currentItems: T[]
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

function usePagination<T>({ items, itemsPerPage }: UsePaginationProps<T>): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1)
  const { selectedStatus } = useControlStore()

  // Если статус изменяется, сбрасываем текущую страницу до первой
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedStatus])

  // Вычисляем индексы для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(items.length / itemsPerPage)

  // Если текущая страница больше общего количества страниц, сбрасываем на первую
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1)
    }
  }, [currentPage, totalPages])

  return {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
  }
}

export default usePagination
