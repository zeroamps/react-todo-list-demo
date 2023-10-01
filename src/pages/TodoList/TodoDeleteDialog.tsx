import { CloseButton } from './CloseButton';
import { ModalDialog } from '../../components/ModalDialog';

export type Props = {
  onClose: () => void;
};

export function TodoDeleteDialog({ onClose }: Props) {
  function handleDelete() {
    onClose();
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
      </div>
      <div className="border-t p-3">
        <div className="flex justify-end gap-1">
          <button className="rounded-lg bg-gray-300 px-6 py-1" onClick={onClose}>
            Close
          </button>
          <button className="rounded-lg bg-lime-600 px-6 py-1 text-white" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </ModalDialog>
  );
}
