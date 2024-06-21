"use client"
import { Todo } from '@prisma/client'
import { upDateTodo } from '@/app/helpers/Todos/handlers';
import { useRouter } from 'next/navigation';
import { NewTodo ,TodoItem  } from '@/components';


interface Props {
    todos?: Array<Todo>
}



export const TodosGrid = ({ todos = [] }: Props) => {

    const router = useRouter()
    const toggleTodo = async (id: string, complete: boolean) => {
        const updateDates = await upDateTodo(id, complete)
        console.log({ updateDates });
        router.refresh()
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

