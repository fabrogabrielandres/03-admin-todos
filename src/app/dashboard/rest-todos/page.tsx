export const dynamic = 'force-dynamic'
export const revalidate = 0
import { fetchTodos } from "@/app/helpers/Todos/handlers";
import { TodosGrid } from "@/components";

export const metadata = {
  title: 'Title RestTodosPage',
  description: 'Description RestTodosPage',
};



export default async function RestTodosPage() {

  const data = await fetchTodos();
  return (
    <div>
      <TodosGrid todos={data} />
    </div>
  );
}