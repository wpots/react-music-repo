import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === "/protected") {
        console.log('nextUrl')
        return !!token
      }
      return true

    },
  },
})

export const config = { matcher: ["/protected"] }