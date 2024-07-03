import NextAuth, { NextAuthConfig } from "next-auth"
import GithubProviders from 'next-auth/providers/github';

const authOptions: NextAuthConfig = {
    //   providers: [GitHub({clientId:"",clientSecret})],
    providers: [
        GithubProviders({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ]
}

const handlers = NextAuth(authOptions)

export { handlers as GET, handlers as POST }
