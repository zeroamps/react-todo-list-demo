import { useCallback, useMemo } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { useImmerReducer } from 'use-immer';
import { Todo, todoConverter } from '../../../domains';
import { useAuth } from '../../../hooks/useAuth';
import { db } from '../../../firebase';

export type TodosDispatchActions = {
  reload: () => Promise<void>;
  create: (title: string, description: string) => Promise<void>;
  update: (id: string, title: string, description: string) => Promise<void>;
  remove: (id: string) => Promise<void>;
};

export function useTodosReducer(): [Todo[], TodosDispatchActions] {
  const [todos, dispatch] = useImmerReducer(todosReducer, [] as Todo[]);
  const auth = useAuth();

  const reload = useCallback(
    async function reload() {
      const todosCollection = collection(db, 'todos').withConverter(todoConverter);
      const todosQuery = query(todosCollection, where('userId', '==', auth.currentUser?.uid));
      const snapshot = await getDocs(todosQuery);
      const todos = snapshot.docs.flatMap((doc) => doc.data());
      dispatch({ type: 'reload', todos });
    },
    [auth, dispatch]
  );

  const create = useCallback(
    async function create(title: string, description: string) {
      await addDoc(collection(db, 'todos'), { title, description, userId: auth.currentUser?.uid });
      await reload();
    },
    [auth, reload]
  );

  const update = useCallback(
    async function update(id: string, title: string, description: string) {
      await setDoc(doc(db, 'todos', id), { title, description }, { merge: true });
      await reload();
    },
    [reload]
  );

  const remove = useCallback(
    async function remove(id: string) {
      await deleteDoc(doc(db, 'todos', id));
      await reload();
    },
    [reload]
  );

  return [todos, useMemo(() => ({ reload, create, update, remove }), [reload, create, update, remove])];
}

type TodosReducerDispatchAction = { type: 'reload'; todos: Todo[] };

function todosReducer(draft: Todo[], action: TodosReducerDispatchAction) {
  switch (action.type) {
    case 'reload': {
      draft = action.todos;
      return draft;
    }
  }
}
