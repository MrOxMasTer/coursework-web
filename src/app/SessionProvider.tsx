import { SessionProvider as _SessionProvider } from 'next-auth/react';

type SessionProviderProps = {
  children: React.ReactNode;
};

export const SessionProvider = async ({ children }: SessionProviderProps) => {
  // const = await auth();

  return <_SessionProvider>{children}</_SessionProvider>;
};
