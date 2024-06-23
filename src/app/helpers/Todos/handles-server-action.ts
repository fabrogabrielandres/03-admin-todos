"use server"

import prisma from "@/lib/prisma"
import { revalidateTag } from "next/cache"

export const upDateTodoWithServerAction = async (id: string, complete: boolean) => {
    try {
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete }
        })
        revalidateTag("/dashboard/server-todos")
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
        revalidateTag("/dashboard/server-todos")
        return updatedTodo
    } catch (error) {
        throw new Error("Error when it try to create Todo");

    }
} 