import { QueryClient } from '@tanstack/react-query'
import { client } from '@/shared/generated/client.gen.ts';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

client.setConfig({
  baseURL: __API__,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_KEY)}`,
  },
});

export default client;