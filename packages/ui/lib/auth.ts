import NextAuth, { AuthError, CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import { prisma } from "./db"
import { compare } from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email"
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {

        const email = credentials.email as string | undefined
        const password = credentials.password as string | undefined

        if (!email || !password)
          throw new CredentialsSignin("Please provide both email and password!")

        const user = await prisma.user.findFirst({ where: { email: email } })

        if (!user)
          throw new CredentialsSignin("Invalid email or password!")

        if (!user.password)
          throw new CredentialsSignin("Invalid email or password!")

        const ismatch = await compare(password, user.password)

        if (!ismatch) throw new CredentialsSignin("Invalid email or password!")

        return user
      },
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user
          const existingUser = await prisma.user.findFirst({ where: { email: email! } })

          if (!existingUser) await prisma.user.create({ data: { email: email!, name: name!, image: image, id: id } })
          return true

        } catch (error) {
          throw new AuthError("Error while creating user!")
        }
      }
      if (account?.provider === "credentials") return true;
      return false
    }
  }
})