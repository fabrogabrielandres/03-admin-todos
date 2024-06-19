import { Todo } from '@prisma/client'
import style from './TodoItem.module.css'
import React from 'react'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
    id: string;
    description: string;
    complete: boolean;
}
export const TodoItem = ({ id, description, complete }: Props) => {
    return (
        <div className={complete ? style.todoDone : style.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
                <div
                    // onClick={() => toggleTodo(todo.id, !todo.complete)}
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
