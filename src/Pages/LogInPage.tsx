import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export function LogInPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => console.log(values)
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-light">Log in</h1>
      <form className="flex w-3/4 flex-col gap-4 md:w-auto">
        <div className="flex flex-col gap-1 md:flex-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="rounded-lg"
          />
        </div>
        <button type="submit" className="rounded-lg bg-lime-600 px-8 py-2 text-lg font-semibold text-white">
          Log in
        </button>
      </form>
      <p>
        <Link to="/signup" className="underline">
          Don't have an account?
        </Link>
      </p>
    </div>
  );
}
