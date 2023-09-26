import { useState } from 'react';
import { TodoItemEditDialog } from './TodoItemEditDialog';

export function TodoItemCreate() {
  const [showEditDialog, setshowEditDialog] = useState(false);

  return (
    <>
      <div className="fixed bottom-2 end-2 start-2 flex">
        <button
          className="flex-grow rounded-lg bg-lime-600 px-8 py-2 text-lg font-semibold text-white"
          onClick={() => setshowEditDialog(true)}>
          Create
        </button>
      </div>
      {showEditDialog && <TodoItemEditDialog onClose={() => setshowEditDialog(false)} />}
    </>
  );
}
