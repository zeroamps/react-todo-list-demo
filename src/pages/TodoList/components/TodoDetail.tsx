import { useState } from 'react';
import { EditButton } from './EditButton';
import { DeleteButton } from './DeleteButton';
import { TodoEditDialog } from './TodoEditDialog';
import { TodoDeleteDialog } from './TodoDeleteDialog';
import { Todo } from '../../../domains';

type Props = {
  todo: Todo;
};

export function TodoDetail({ todo }: Props) {
  const [showEditDialog, setshowEditDialog] = useState(false);
  const [showDeleteDialog, setshowDeleteDialog] = useState(false);

  return (
    <>
      <div className="rounded border border-yellow-500 bg-yellow-200 p-2">
        <div className="font-semibold">{todo.title}</div>
        <div className="text-sm">{todo.description}</div>
        <div className="flex justify-end gap-2">
          <EditButton onClick={() => setshowEditDialog(true)} />
          <DeleteButton onClick={() => setshowDeleteDialog(true)} />
        </div>
      </div>
      {showDeleteDialog && <TodoDeleteDialog todoId={todo.id} onClose={() => setshowDeleteDialog(false)} />}
      {showEditDialog && <TodoEditDialog todo={todo} onClose={() => setshowEditDialog(false)} />}
    </>
  );
}
