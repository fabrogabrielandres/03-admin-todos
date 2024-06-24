"use client"
import { Todo } from '@prisma/client'
import { TodoItemWithServerAction } from './TodoItem/TodoItemWithServerAction';
import { NewTodoWithServerAction } from './newTodo/NewTodoWithServerAction';


interface Props {
    todos?: Array<Todo>
}



export const TodosGridWithServerAction = ({ todos = [] }: Props) => {


    return (
        <div >
            <div className='w-full px-3 mx-5 mb-5'>
                <NewTodoWithServerAction />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {todos.map(todo =>
                    <TodoItemWithServerAction key={todo.id} todo={todo} />
                )}
            </div>
        </div>
    )
}
