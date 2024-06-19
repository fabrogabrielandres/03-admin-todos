import { Todo } from '@prisma/client'
import React from 'react'

interface Props {
    id: string;
    description: string;
    complete: boolean;
}
export const TodoItem = ({ id, description, complete }: Props) => {
    return (
        <>
            <div>{id}</div>
            <div>{description}</div>
            <div>{JSON.stringify(complete)}</div>
        </>
    )
}
