"use client"
import { Todo } from '@prisma/client'
import { NewTodo, TodoItem } from '@/components';
import { upDateTodoWithServerAction } from '@/app/helpers/Todos/handles-server-action';


interface Props {
    todos?: Array<Todo>
}



export const TodosGridWithServerAction = ({ todos = [] }: Props) => {

    const toggleTodo = async (id: string, complete: boolean) => {
        await upDateTodoWithServerAction(id, complete)
    }

    return (
        <div >
            <div className='w-full px-3 mx-5 mb-5'>
                <NewTodo />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {todos.map(todo =>
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                )}
            </div>
        </div>
    )
}
