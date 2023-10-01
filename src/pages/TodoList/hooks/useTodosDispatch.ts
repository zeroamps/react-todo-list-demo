import { useContext } from 'react';
import { TodosDispatchContext } from '../contexts/TodosProvider';

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}
