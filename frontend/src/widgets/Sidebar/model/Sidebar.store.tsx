import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { MenuItemType } from './Sidebar.types.ts';

type State = {
  menuCollapsed: boolean
  menuItemsList: MenuItemType[]
}

type Action = {
  toggleMenuCollapsed: () => void;
  setMenuItems: (items: MenuItemType[]) => void;
}

const initialState: State = {
  menuCollapsed: false,
  menuItemsList: []
}

export const useSidebarStore = create<State & Action>()(devtools((set, getState) => ({
  ...initialState,
  toggleMenuCollapsed: () => {
    const state = getState()
    set({ menuCollapsed: !state.menuCollapsed})
  },
  setMenuItems: (items) => {
    set({ menuItemsList: items})
  },
})));