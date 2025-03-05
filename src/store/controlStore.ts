import { create } from 'zustand'

type ControlStore = {
  searchQuery: string
  selectedStatus: string
  selectedOrder: string
  setSearchQuery: (query: string) => void
  setSelectedStatus: (status: string) => void
  setSelectedOrder: (order: string) => void
  resetFilters: () => void
}

const useControlStore = create<ControlStore>((set) => ({
  searchQuery: '',
  selectedStatus: 'all',
  selectedOrder: 'desc',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedStatus: (status) => set({ selectedStatus: status }),
  setSelectedOrder: (order) => set({ selectedOrder: order }),
  resetFilters: () => set({ searchQuery: '', selectedStatus: 'all', selectedOrder: 'desc' }),
}))

export default useControlStore
