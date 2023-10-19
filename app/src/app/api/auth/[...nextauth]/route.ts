import NextAuth, { AuthOptions, SessionStrategy } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { isVerifiedUser } from "./verifyUser.service";

/** Route Handler for Authentication
 * https://nextjs.org/docs/app/api-reference/file-conventions/route
 * 
 * https://next-auth.js.org/configuration/initialization#route-handlers-app
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
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // @ts-ignore
    async signIn({account, profile}) {
      if (account?.provider ==='google' && profile?.email) {
        try {
          return await isVerifiedUser(profile.email);
        } catch (error) {
          console.log(error)
          return false;
        }
      }
      return false;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }