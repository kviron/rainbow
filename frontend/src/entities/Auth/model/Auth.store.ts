import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { AuthService, type AuthServiceDto } from '@/entities/Auth';
import { type User, UserService } from '@/entities/User';
import type { StoreWithPersist } from '@/shared/types';
import { AUTH_LOCALSTORAGE_KEY } from '@/shared/const';

type State = {
  user: Nullable<User>;
  token: Nullable<string>
  inited: boolean;
  isLoading: boolean;
}

type Actions = {
  initAuth: () => void,
  setToken: (token: string) => void,
  login: (params: AuthServiceDto['login']) => void,
  logout: () => void,
}

export interface AuthStore extends State, Actions {}

const initialState: State = {
  isLoading: false,
  inited: false,
  token: null,
  user: null,
};

const authStore: StoreWithPersist<AuthStore> = (set, getState) => ({
  ...initialState,
  initAuth: async () => {
    const authToken = getState().token;

    if (!authToken) {
      set({ isLoading: false, inited: true });
      return;
    }

    const user = await UserService.current();
    set({ user, inited: true, isLoading: false, token: authToken });
  },
  setToken: (token) => {
    set({ token });
  },
  login: async (params) => {
    set({ isLoading: true, inited: false });

    const response = await AuthService.login(params);

    if (response.status === 201) {
      const user = await UserService.current();
      set({ user, inited: true, isLoading: false, token: response.data?.accessToken });
    }
  },
  logout: () => {
    set({ user: null, token: null });
  },
});

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(authStore, {
    name: AUTH_LOCALSTORAGE_KEY,
    storage: createJSONStorage(() => localStorage),
    })),
);