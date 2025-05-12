'use client';

import {
  isServer,
  QueryClient,
  QueryClientProvider as _QueryClientProvider,
} from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

export default function QueryClientProvider({
  children,
}: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <_QueryClientProvider client={queryClient}>{children}</_QueryClientProvider>
  );
}
