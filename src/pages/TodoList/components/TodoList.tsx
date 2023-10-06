import { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { useTodos } from '../hooks/useTodos';
import { useTodosDispatch } from '../hooks/useTodosDispatch';
import { TodoDetail } from './TodoDetail';

export function TodoList() {
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        await dispatch.reload();
      } catch (e) {
        if (e instanceof FirebaseError) {
          console.error(e);
          setError(e.message);
        } else {
          console.error(e);
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

  if (error !== null) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div className="rounded-lg border border-red-500 bg-red-200 p-2 text-center text-sm">{error}</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div className="text-center text-2xl font-light md:text-3xl">Loading...</div>
      </div>
    );
  }

  const details = todos.map((todo) => <TodoDetail key={todo.id} todo={todo} />);

  if (todos.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div className="text-center text-2xl font-light md:text-3xl">There is no task in your todo list</div>
      </div>
    );
  }

  return <div className="flex flex-col gap-2 px-2 pb-16 pt-2">{details}</div>;
}
