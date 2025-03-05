import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  console.log('pagination')

  return (
    <div className='flex items-center gap-3 mt-4'>
      <button
        className={cn(
          currentPage === 1
            ? 'border-neutral-300 text-neutral-500'
            : 'text-blue-600 border-blue-400',
          'flex items-center justify-center size-10 border-2 rounded-md'
        )}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft strokeWidth={1.5} />
      </button>

      <span className='text-sm'>
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={cn(
          currentPage === totalPages
            ? 'border-neutral-300 text-neutral-500'
            : 'text-blue-600 border-blue-400',
          'flex items-center justify-center size-10 border-2 rounded-md'
        )}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowRight strokeWidth={1.5} />
      </button>
    </div>
  )
}

export default Pagination
