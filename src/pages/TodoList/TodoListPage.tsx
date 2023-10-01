import { TodoList } from './TodoList';
import { TodoCreate } from './TodoCreate';

export function TodoListPage() {
  return (
    <>
      <TodoList todos={[]} />
      <TodoCreate />
    </>
  );
}
