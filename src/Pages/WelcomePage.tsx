import { Link } from 'react-router-dom';

export function WelcomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-center text-6xl font-light md:text-7xl">Let's make a todo list</h1>
      <Link to="/todolist" className="rounded-lg bg-lime-600 px-16 py-4 text-xl font-semibold text-white">
        Let's get started
      </Link>
    </div>
  );
}
