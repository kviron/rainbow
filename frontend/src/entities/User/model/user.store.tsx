import { create } from 'zustand'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import type { User } from './user.types';
import { UserService } from './user.service.ts';
import { devtools } from 'zustand/middleware'

type State = {
  authData?: User;
  _inited: boolean;
  isLoading: boolean;
}

type Action = {
  initAuthData: () => void,
  setAuthData: (authData: User) => void,
  logout: () => void,
}

const initialState: State = {
  isLoading: false,
  _inited: false,
}

export const useUserStore = create<State & Action>()(devtools((set) => ({
  ...initialState,
  setAuthData: (authData: User) => {
    set({ authData })
  },
  initAuthData: async () => {
    const authToken = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if(!authToken) {
      set({ isLoading: false, _inited: true });
      return;
    }

    const user = await UserService.current()
    set({ authData: user, _inited: true, isLoading: false, });
  },
  logout: () => {
    set({ authData: undefined })
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  },
}), {
  name: 'userStore', // имя хранилища в DevTools
}));