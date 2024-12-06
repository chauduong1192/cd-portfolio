import {
  isServer,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query';

const makeQueryClient = (config?: QueryClientConfig) => {
  return new QueryClient({
    ...config,
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // Cache remains fresh for 1 minute
        refetchOnMount: false,
        refetchOnWindowFocus: false, // prevent refetch on window focus
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

export const getQueryClient = (config?: QueryClientConfig) => {
  if (isServer) {
    return makeQueryClient(config);
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient(config);
    return browserQueryClient;
  }
};
