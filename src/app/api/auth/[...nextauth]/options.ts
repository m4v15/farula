import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.AUTH_GOOGLE_ID as string,
    clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
  })],
}