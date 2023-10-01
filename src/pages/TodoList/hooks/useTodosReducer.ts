import { useImmerReducer } from 'use-immer';
import { Todo } from '../../../domains';

export type TodosReducerAction = { type: 'reload' };

export function useTodosReducer() {
  return useImmerReducer(todosReducer, [] as Todo[]);
}

function todosReducer(draft: Todo[], action: TodosReducerAction) {
  switch (action.type) {
    case 'reload': {
      return draft;
    }
  }
}
