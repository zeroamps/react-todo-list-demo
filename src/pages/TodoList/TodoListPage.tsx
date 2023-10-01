import { TodoList } from './components/TodoList';
import { TodoCreate } from './components/TodoCreate';

export function TodoListPage() {
  return (
    <>
      <TodoList todos={[]} />
      <TodoCreate />
    </>
  );
}
