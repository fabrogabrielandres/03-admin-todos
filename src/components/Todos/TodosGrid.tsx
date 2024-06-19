import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'
import React from 'react'
import { TodoItem } from './TodoItem/TodoItem';

interface Props {
    todos?: Array<Todo>
}

export const TodosGrid = ({ todos = [] }: Props) => {
    return (
        <>
            {todos.map(todo =>
                <TodoItem key={todo.id} {...todo} />
            )}
        </>
    )
}
