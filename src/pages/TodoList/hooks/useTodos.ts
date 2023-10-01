import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosProvider';

export function useTodos() {
  return useContext(TodosContext);
}
