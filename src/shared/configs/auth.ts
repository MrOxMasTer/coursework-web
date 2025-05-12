import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { pageConfig } from './page';

// TODO: https://github.com/nextauthjs/next-auth/issues/8086#issuecomment-1647602194
// TODO: encode / decode jwt
// TODO: callbacks
// TODO: C# должен знать где лежит токен - настроить

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },

      // TODO: authorize: async ({ email, password }) => {},
    }),
  ],
  pages: {
    signIn: pageConfig.login,
    newUser: pageConfig.register,
    // signOut: '/auth/signout',
  },
  trustHost: true,
  // secret: env.
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   // Встраиваем C# token внутрь payload, если есть
    //   if (user && 'token' in user) {
    //     token.accessToken = (user as any).token;
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   session.accessToken = (token as any).accessToken;
    //   return session;
    // },
  },
  jwt: {
    // async encode({ token, secret, maxAge }) {
    //   // Подписываем payload exactly так же, как C#:
    //   return new jose.SignJWT(token)
    //     .setProtectedHeader({ alg: 'HS256' })
    //     .setIssuedAt()
    //     .setIssuer(process.env.JWT_ISSUER)
    //     .setAudience(process.env.JWT_AUDIENCE)
    //     .setExpirationTime(Math.floor(Date.now() / 1000) + maxAge!)
    //     .sign(Buffer.from(JWT_SECRET));
    // },
    // async decode({ token, secret }) {
    //   const { payload } = await jose.jwtVerify(token, Buffer.from(JWT_SECRET), {
    //     issuer: process.env.JWT_ISSUER,
    //     audience: process.env.JWT_AUDIENCE,
    //     algorithms: ['HS256'],
    //   });
    //   return payload as Record<string, unknown>;
    // },
  },
});
