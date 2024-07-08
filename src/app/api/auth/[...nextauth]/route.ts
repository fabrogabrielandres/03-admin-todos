import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth"
import GithubProviders from 'next-auth/providers/github';
import GoogleProviders from 'next-auth/providers/google';
import async from '../../../dashboard/page';


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
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async signIn({ account, user, credentials, email, profile }) {
            return true
        },
        async jwt({ account, token, user, profile, session, trigger }) {
            const dbUser = await prisma.user.findUnique({
                where: { email: token.email ?? "No Email" }
            })
            token.roles = dbUser?.roles ?? ["no roles"];
            token.id = dbUser?.id ?? "UUID";
            return token
        },
        async session({ session, token, user }) {
            if (session && session.user) {
                session.user.id = String(token.id);
                session.user.roles = [String(token.roles)];
            }
            return session
        },

    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authOptions)

