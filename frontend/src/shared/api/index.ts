import { QueryClient } from '@tanstack/react-query'
import { client } from '@/client/client.gen';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

client.setConfig({
  // set default base url for requests
  baseURL: 'http://host.docker.internal:3001/api',
  // set default headers for requests
  headers: {
    Authorization: 'Bearer <token_from_service_client>',
  },
});

export default client;