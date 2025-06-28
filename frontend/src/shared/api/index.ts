import { QueryClient } from '@tanstack/react-query'
import { client } from '@/shared/generated/client.gen.ts';
import { AUTH_LOCALSTORAGE_KEY } from '@/shared/const';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

const getToken = () => {
  const authStore = localStorage.getItem(AUTH_LOCALSTORAGE_KEY)
  return authStore ? JSON.parse(authStore)?.state?.token : null;
}

client.setConfig({
  baseURL: __API__,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default client;