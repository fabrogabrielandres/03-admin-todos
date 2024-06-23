import { fetchTodos } from "@/app/helpers/Todos/handlers";
import { TodosGrid } from "@/components";
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