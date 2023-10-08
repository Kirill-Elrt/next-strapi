import {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (typeof credentials !== 'undefined') {
          const res = await axios.post('http://elertk133.fvds.ru:1337/api/auth/local', {
            identifier: credentials.email,
            password: credentials.password,
          });
          if (typeof res !== 'undefined') {
            return { ...res.data.user, apiToken: res.data.jwt };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 3600 * 24 },
  // pages: {
  //   signIn: '/login',
  // },
};
