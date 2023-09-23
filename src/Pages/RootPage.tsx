import { Link, Outlet } from 'react-router-dom';

export function RootPage() {
  return (
    <>
      <header className="fixed flex w-full justify-between bg-yellow-400 p-4">
        <Link className="font-semibold" to="/">
          React Todo List Demo
        </Link>
        <div className="flex gap-2">
          <Link to="/login" className="rounded-lg bg-lime-600 px-4 font-semibold text-white">
            Log in
          </Link>
          <Link to="/signup" className="rounded-lg bg-lime-600 px-4 font-semibold text-white">
            Sign up
          </Link>
        </div>
      </header>
      <main className="h-full pt-[56px]">
        <Outlet />
      </main>
    </>
  );
}
