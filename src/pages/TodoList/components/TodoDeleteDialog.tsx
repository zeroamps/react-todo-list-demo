import { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { CloseButton } from './CloseButton';
import { ModalDialog } from '../../../components/ModalDialog';
import { useTodosDispatch } from '../hooks/useTodosDispatch';

export type Props = {
  todoId: string;
  onClose: () => void;
};

export function TodoDeleteDialog({ todoId, onClose }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useTodosDispatch();

  async function handleDelete() {
    setLoading(true);
    setError(null);

    try {
      await dispatch.remove(todoId);
      onClose();
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e);
        setError(e.message);
      } else {
        console.error(e);
        setError('An unexpected error occurred.');
      }
    }

    setLoading(false);
  }

  return (
    <ModalDialog className="rounded-xl border-2 border-yellow-600" show={true} onHide={onClose}>
      <div className="border-b p-3">
        <div className="flex justify-between">
          <h1 className="font-semibold">Task</h1>
          <CloseButton onClick={onClose} />
        </div>
      </div>
      <div className="p-3">
        <p>Do you really want to delete the task?</p>
        {error !== null && <div className="my-2 rounded-lg border border-red-500 bg-red-200 p-2 text-sm">{error}</div>}
      </div>
      <div className="border-t p-3">
        <div className="flex justify-end gap-1">
          <button className="rounded-lg bg-gray-300 px-6 py-1" onClick={onClose}>
            Close
          </button>
          <button
            className="rounded-lg bg-lime-600 px-6 py-1 text-white disabled:opacity-50"
            disabled={loading}
            onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </ModalDialog>
  );
}
