import { Todo } from '@prisma/client'
import style from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { startTransition, useOptimistic } from 'react';
import { upDateTodoWithServerAction } from '@/app/helpers/Todos/handles-server-action';

interface Props {
    todo: Todo
}

export const TodoItemWithServerAction = ({ todo }: Props) => {

    const [useOptimisticTodo, toggleTodoOptimistic] = useOptimistic(todo,
        (state, newOptimisticValue: boolean) => ({ ...state, complete: newOptimisticValue })
    )
    const toggleTodo = async () => {
        try {
            startTransition(
                () => toggleTodoOptimistic(!useOptimisticTodo.complete)
            )
            await upDateTodoWithServerAction(useOptimisticTodo.id, !useOptimisticTodo.complete)
        } catch (error) {
            
            console.log(error);
            
            startTransition(
                () => toggleTodoOptimistic(todo.complete)
            )
        }
    }

    return (
        <div className={`${useOptimisticTodo.complete ? style.todoDone : style.todoPending} grid grid-cols-1 sm:grid-cols-3 gap-2`}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
                <div
                    onClick={toggleTodo}
                    className={` flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${useOptimisticTodo.complete ? 'bg-blue-100' : 'bg-red-100'}`}>
                    {
                        useOptimisticTodo.complete
                            ? <IoCheckboxOutline size={30} />
                            : <IoSquareOutline size={30} />
                    }

                </div>
                <div className="text-center sm:text-left">
                    {useOptimisticTodo.description}
                </div>
            </div>
        </div>

    )
}
