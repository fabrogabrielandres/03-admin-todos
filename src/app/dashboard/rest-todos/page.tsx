import { TodosGrid } from "@/components";

export const metadata = {
  title: 'Title RestTodosPage',
  description: 'Description RestTodosPage',
};

const fetchTodos = async (): Promise<any> => {
  const data = await fetch("http://localhost:3000/api/todos").then(res => res.json())
  return data
}

export default async function RestTodosPage() {

  const data = await fetchTodos();
  return (
    <div>
      <TodosGrid todos={data} />
    </div>
  );
}