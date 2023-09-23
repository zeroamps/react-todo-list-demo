import { useFormik } from 'formik';

export function SignUpPage() {
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
      <h1 className="text-5xl font-light">Sign up</h1>
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
        <button type="submit" className="rounded-lg bg-lime-600 px-8 py-2 text-lg font-semibold text-white">
          Sign up
        </button>
      </form>
    </div>
  );
}
