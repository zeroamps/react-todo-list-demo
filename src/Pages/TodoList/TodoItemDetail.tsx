import { useState } from 'react';
import { EditButton } from './EditButton';
import { DeleteButton } from './DeleteButton';
import { TodoItemEditDialog } from './TodoItemEditDialog';
import { TodoItemDeleteDialog } from './TodoItemDeleteDialog';
import { TodoItem } from '../../domains';

type Props = {
  todoItem: TodoItem;
};

export function TodoItemDetail({ todoItem }: Props) {
  const [showEditDialog, setshowEditDialog] = useState(false);
  const [showDeleteDialog, setshowDeleteDialog] = useState(false);

  return (
    <>
      <div className="rounded border border-yellow-500 bg-yellow-200 p-2">
        <div className="font-semibold">{todoItem.title}</div>
        <div className="text-sm">{todoItem.description}</div>
        <div className="flex justify-end gap-2">
          <EditButton onClick={() => setshowEditDialog(true)} />
          <DeleteButton onClick={() => setshowDeleteDialog(true)} />
        </div>
      </div>
      {showDeleteDialog && <TodoItemDeleteDialog onClose={() => setshowDeleteDialog(false)} />}
      {showEditDialog && <TodoItemEditDialog onClose={() => setshowEditDialog(false)} />}
    </>
  );
}
