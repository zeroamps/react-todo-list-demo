import { TodosProvider } from './contexts/TodosProvider';
import { TodoList } from './components/TodoList';
import { TodoCreate } from './components/TodoCreate';

export function TodoListPage() {
  return (
    <TodosProvider>
      <TodoList />
      <TodoCreate />
    </TodosProvider>
  );
}
