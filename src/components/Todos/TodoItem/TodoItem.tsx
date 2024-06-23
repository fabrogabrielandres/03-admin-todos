import { Todo } from '@prisma/client'
import style from './TodoItem.module.css'
import React from 'react'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
    id: string;
    description: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItem = ({ id, description, complete, toggleTodo }: Props) => {
    return (
        <div className={`${complete ? style.todoDone : style.todoPending} grid grid-cols-1 sm:grid-cols-3 gap-2`}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
                <div
                    onClick={() => toggleTodo(id, !complete)}
                    className={` flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${complete ? 'bg-blue-100' : 'bg-red-100'}`}>
                    {
                        complete
                            ? <IoCheckboxOutline size={30} />
                            : <IoSquareOutline size={30} />
                    }

                </div>
                <div className="text-center sm:text-left">
                    {description}
                </div>
            </div>
        </div>

    )
}
