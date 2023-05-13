import getSession from "./getSession";
import prisma from '../libs/prismadb'

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        if (!session?.user?.email) {
            return null
        }
        const email = session.user.email
        const user = await prisma.User.findUnique({
            where: {
                email
            },
            include: {
                alltodos: true
            }
        })
        if (!user) {
            return null
        }
        return user
    } catch (error) {
        return error
    }

}