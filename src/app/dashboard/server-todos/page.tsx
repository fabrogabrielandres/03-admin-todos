export const dynamic = 'force-dynamic'
export const revalidate = 0
import { fetchTodos } from "@/app/helpers/Todos/handlers";
import { TodosGridWithServerAction } from "@/components/Todos/TodosGridWithServerAction";

export const metadata = {
  title: 'Title RestTodosPage',
  description: 'Description RestTodosPage',
};



export default async function ServertodosPage() {

  const data = await fetchTodos();
  return (
    <div>
      <TodosGridWithServerAction todos={data} />
    </div>
  );
}