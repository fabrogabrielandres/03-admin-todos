import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";


export const upDateTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const body = { complete };
    const todo = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    return todo
}


export const createTodo = async (description: string): Promise<Todo> => {
    const body = { description };
    const todo = await fetch(`http://localhost:3000/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    return todo
}

export const deleteTodoTrues = async (): Promise<Boolean> => {

    const resp = await fetch('http://localhost:3000/api/todos', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());


    console.log(resp);
    return resp;

}


export const fetchTodos = async (): Promise<any> => {
    // const data = await fetch("http://localhost:3000/api/todos", {
    //   cache: 'no-cache'
    // }).then(res => res.json())
    const data = prisma.todo.findMany({orderBy: {description:"asc"} })
    return data
  }