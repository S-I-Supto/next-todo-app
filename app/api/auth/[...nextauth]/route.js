import bcrypt from "bcrypt"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../libs/prismadb'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOGGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                const user = await prisma.User.findUnique({
                    where: {
                        email: email
                    }
                });
                console.log('the user is ', user);
                if (user === null) {
                    throw new Error("Invalid Email or Password");
                }

                const isPasswordMatched = await bcrypt.compare(password, user.hashedPassword);
                if (!isPasswordMatched) {
                    throw new Error("Invalid Email or Password");
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }