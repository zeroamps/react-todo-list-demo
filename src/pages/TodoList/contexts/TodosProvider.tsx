import { createContext } from 'react';
import { TodosDispatchActions, useTodosReducer } from '../hooks/useTodosReducer';
import { Todo } from '../../../domains';

export const TodosContext = createContext<Todo[]>([]);
export const TodosDispatchContext = createContext<TodosDispatchActions>({} as TodosDispatchActions);

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
