import { Dispatch, createContext } from 'react';
import { TodosReducerAction, useTodosReducer } from '../hooks/useTodosReducer';
import { Todo } from '../../../domains';

export const TodosContext = createContext<Todo[]>([]);
export const TodosDispatchContext = createContext<Dispatch<TodosReducerAction> | null>(null);

type Props = {
  children: React.ReactNode;
};

export function TodosProvider({ children }: Props) {
  const [todos, dispatch] = useTodosReducer();

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}
