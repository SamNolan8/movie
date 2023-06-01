import prisma from "./prismadb";

export async function createUser(email: string, name: string, password: string) {
    try {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export async function getAllUsers() {
    try {
        const allUsers = await prisma.user.findMany()
        return allUsers
    } catch (error) {
        console.log(error)
    }
}
