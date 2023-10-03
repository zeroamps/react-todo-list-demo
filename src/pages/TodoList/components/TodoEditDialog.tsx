import { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FirebaseError } from 'firebase/app';
import { CloseButton } from './CloseButton';
import { ModalDialog } from '../../../components/ModalDialog';
import { useTodosDispatch } from '../hooks/useTodosDispatch';
import { Todo } from '../../../domains';

type Values = { title: string; description: string };

export type Props = {
  todo?: Todo;
  onClose: () => void;
};

export function TodoEditDialog({ todo, onClose }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useTodosDispatch();

  const formik = useFormik({
    initialValues: { title: todo ? todo.title : '', description: todo ? todo.description : '' },
    validationSchema: yup.object().shape({
      title: yup.string().required().max(64),
      description: yup.string().required().max(256)
    }),
    onSubmit: (values) => handleSubmit(values)
  });

  async function handleSubmit(values: Values) {
    setLoading(true);
    setError(null);

    try {
      if (todo) {
        await dispatch.update(todo.id, values.title, values.description);
      } else {
        await dispatch.create(values.title, values.description);
      }
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
    <ModalDialog className="w-3/4 rounded-xl border-2 border-yellow-600" show={true} onHide={onClose}>
      <div className="border-b p-3">
        <div className="flex justify-between">
          <h1 className="font-semibold">Task</h1>
          <CloseButton onClick={onClose} />
        </div>
      </div>
      <div className="p-3">
        <form id="form" className="flex flex-col gap-1" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={classNames('rounded-lg', { 'bg-red-200': formik.touched.title && formik.errors.title })}
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className={classNames('rounded-lg', {
              'bg-red-200': formik.touched.description && formik.errors.description
            })}
            rows={5}
          />
          {error !== null && <div className="rounded-lg border border-red-500 bg-red-200 p-2 text-sm">{error}</div>}
        </form>
      </div>
      <div className="border-t p-3">
        <div className="flex justify-end gap-1">
          <button className="rounded-lg bg-gray-300 px-6 py-1" onClick={onClose}>
            Close
          </button>
          <button
            form="form"
            type="submit"
            disabled={loading}
            className="rounded-lg bg-lime-600 px-6 py-1 text-white disabled:opacity-50">
            Save
          </button>
        </div>
      </div>
    </ModalDialog>
  );
}
