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
        <button type="submit" className="btn-lg">
          Sign up
        </button>
      </form>
    </div>
  );
}
