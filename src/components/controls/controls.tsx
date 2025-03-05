import DateOrderSelect from './date-order-select'
import ResetFiltersButton from './reset-filters-button'
import SearchInput from './search-input'
import StatusSelect from './status-select'

export default function Controls() {
  return (
    <div className='w-full flex gap-5'>
      <SearchInput />
      <StatusSelect />
      <DateOrderSelect />
      <ResetFiltersButton />
    </div>
  )
}
