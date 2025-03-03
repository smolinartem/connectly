import { create } from 'zustand'

export type Tab = 'form' | 'table'

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

const useTabStore = create<TabStore>((set) => ({
  activeTab: 'table', // По умолчанию активна вкладка "table"
  setActiveTab: (tab) => set({ activeTab: tab }),
}))

export default useTabStore
