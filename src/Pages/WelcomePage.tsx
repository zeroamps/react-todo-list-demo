import { Link } from 'react-router-dom';

export function WelcomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-7xl font-light">Let's make a todo list</h1>
      <Link to="/todolist" className="btn-xl">
        Let's get started
      </Link>
    </div>
  );
}
