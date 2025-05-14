import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { queryClient } from '@/shared/api';

type ApiProviderProps = {
  children?: ReactNode;
}

export const ApiProvider = ({children}: ApiProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}