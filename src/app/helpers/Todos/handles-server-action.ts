"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

const sleep = async (delay: number = 0) => {
    return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 1000 * delay);
    })
}

export const upDateTodoWithServerAction = async (id: string, complete: boolean) => {
    try {
        // await sleep(3)
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete }
        })
        revalidatePath("/dashboard/server-todos")
        return updatedTodo
    } catch (error) {
        throw new Error("Error when it try to update Todo");

    }

}

export const createTodoWithServerAction = async (description: string) => {
    try {
        const updatedTodo = await prisma.todo.create({
            data: {
                description
            }
        })
        revalidatePath("/dashboard/server-todos")
        return updatedTodo
    } catch (error) {
        throw new Error("Error when it try to create Todo");

    }
}

export const deleteWithServerAction = async () => {
    try {
        const result = await prisma.todo.deleteMany({
            where: { complete: true },
        })
        revalidatePath("/dashboard/server-todos")
        return result
    } catch (error) {
        throw new Error(`error when a try to delete WithServerAction ${error}`);
    }
}
