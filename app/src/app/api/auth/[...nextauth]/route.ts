import NextAuth, { AuthOptions, SessionStrategy } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

/** Route Handler for Authentication
 * https://nextjs.org/docs/app/api-reference/file-conventions/route
 */
export const authOptions:AuthOptions = {
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  callbacks: {
    //@ts-ignore
    async signIn({account, profile}) {
      if (account?.provider ==='google') {
        console.log(profile?.email);
        const list = ['wietekepots@gmail.com'];
        return  list.includes(profile?.email);
      }
      return true;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }