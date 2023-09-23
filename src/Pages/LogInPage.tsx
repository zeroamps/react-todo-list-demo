import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export function LogInPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-light">Log in</h1>
      <form className="flex flex-col gap-4">
        <div className="flex gap-1">
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
        <button type="submit" className="btn-lg">
          Log in
        </button>
      </form>
      <p>
        <Link to="/signup" className="text-yellow-950 underline">
          Don't have an account?
        </Link>
      </p>
    </div>
  );
}
