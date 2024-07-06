import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth"
import GithubProviders from 'next-auth/providers/github';
import GoogleProviders from 'next-auth/providers/google';


export const authOptions: NextAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProviders({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authOptions)

