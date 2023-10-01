import { TodoDetail } from './TodoDetail';
import { Todo } from '../../domains';

type Props = {
  todos: Todo[];
};

export function TodoList({ todos }: Props) {
  const todoDetails = todos.map((todo) => <TodoDetail key={todo.id} todo={todo} />);

  return (
    <>
      {todos.length > 0 ? (
        <div className="flex flex-col gap-2 px-2 pb-16 pt-2">{todoDetails}</div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="text-center text-2xl font-light md:text-3xl">There is no task in your todo list</div>
        </div>
      )}
    </>
  );
}
