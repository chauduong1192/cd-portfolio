'use client';

import { QueryCache, QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/react-query/query-client';
import { useToast } from '@/hooks/use-toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary

  const { toast } = useToast();

  const queryClient = getQueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        toast({
          description: error.message,
          variant: 'error',
        });
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
