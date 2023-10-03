import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import classNames from 'classnames';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../hooks/useAuth';
import { signUpPath, todoListPath } from '../routes';

type Values = { email: string; password: string };

export function LogInPage() {
  const auth = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required()
    }),
    onSubmit: (values) => handleSubmit(values)
  });

  async function handleSubmit(values: Values) {
    setLoading(true);
    setError(null);

    try {
      await auth.login(values?.email, values?.password);
      navigate(todoListPath);
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
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-light">Log in</h1>
      <form id="form" className="flex w-3/4 flex-col gap-4 md:w-auto" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-1 md:flex-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={classNames('rounded-lg', { 'bg-red-200': formik.touched.email && formik.errors.email })}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={classNames('rounded-lg', { 'bg-red-200': formik.touched.password && formik.errors.password })}
          />
        </div>
        {error !== null && <div className="rounded-lg border border-red-500 bg-red-200 p-2 text-sm">{error}</div>}
        <button
          type="submit"
          form="form"
          disabled={loading}
          className="rounded-lg bg-lime-600 px-8 py-2 text-lg font-semibold text-white disabled:opacity-50">
          Log in
        </button>
      </form>
      <p>
        <Link to={signUpPath} className="underline">
          Don't have an account?
        </Link>
      </p>
    </div>
  );
}
