import { create } from 'zustand'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import type { User } from './user.types';

type State = {
  authData?: Nullable<User>;
  _inited: boolean;
}

type Action = {
  setAuthData: (authData: User) => void,
  logout: () => void,
}

const initialState: State = {
  authData: null,
  _inited: false,
}

export const useUserStore = create<State & Action>((set) => ({
  ...initialState,
  setAuthData: (authData: User) => {
    set({ authData })
    localStorage.setItem(USER_LOCALSTORAGE_KEY, authData.id.toString());
  },
  logout: () => {
    set({ authData: null })
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  },
}));