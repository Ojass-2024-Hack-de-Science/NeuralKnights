import Credentials from "next-auth/providers/credentials";
import { User } from "@/database/model/User";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import {dbConnect} from "@/database/dbConnect"
export const NEXT_AUTH = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await dbConnect();
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });
        if (!user || !user.password) {
          return null;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return null;
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  callbacks: {
    async jwt({ token, account, profile }: any) {
        console.log(token)
      token.UserId = token.sub;
      return token;
    },
    async session({ session, token, user }: any) {
      session.user.id = token.UserId;
      return session;
    },
    async signIn({ user, account, profile }: any) {
      try {
        await dbConnect()
        const userData = await User.find({
          GoogleId: user.id,
        });
        if (userData.length===0) {
          const data = await User.create({
            GoogleId: user.id,
            username: user.name,
            email: user.email,
            image: user.image,
          });
        }
      } catch (error) {
        console.log(error);
      }
      return true;
    },
  },
};
