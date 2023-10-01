import { useFormik } from 'formik';
import { CloseButton } from './CloseButton';
import { ModalDialog } from '../../components/ModalDialog';

export type Props = {
  onClose: () => void;
};

export function TodoEditDialog({ onClose }: Props) {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    onSubmit: (values) => console.log(values)
  });

  // function handleSave() {
  //   onClose();
  // }

  return (
    <ModalDialog className="w-3/4 rounded-xl border-2 border-yellow-600" show={true} onHide={onClose}>
      <div className="border-b p-3">
        <div className="flex justify-between">
          <h1 className="font-semibold">Task</h1>
          <CloseButton onClick={onClose} />
        </div>
      </div>
      <div className="p-3">
        <form id="form" className="flex flex-col gap-1">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="rounded-lg"
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="rounded-lg"
            rows={5}
          />
        </form>
      </div>
      <div className="border-t p-3">
        <div className="flex justify-end gap-1">
          <button className="rounded-lg bg-gray-300 px-6 py-1" onClick={onClose}>
            Close
          </button>
          <button form="form" type="submit" className="rounded-lg bg-lime-600 px-6 py-1 text-white">
            Save
          </button>
        </div>
      </div>
    </ModalDialog>
  );
}
