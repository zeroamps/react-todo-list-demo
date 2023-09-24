import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { BarsButton } from './BarsButton';

export function RootPage() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <header className="fixed flex w-full justify-between bg-yellow-400 p-4">
        <Link className="font-semibold" to="/">
          React Todo List Demo
        </Link>
        <nav
          onClick={() => setHidden(true)}
          className={classNames(
            { hidden: hidden },
            'absolute left-0 top-14 flex w-full flex-col gap-1 bg-yellow-500 p-2',
            'md:static md:top-auto md:flex md:w-auto md:flex-row md:gap-2 md:bg-yellow-400 md:p-0'
          )}>
          <Link to="/login" className="btn block py-2 text-center md:inline md:py-0">
            Log in
          </Link>
          <Link to="/signup" className="btn block py-2 text-center md:inline md:py-0">
            Sign up
          </Link>
        </nav>
        <BarsButton onClick={() => setHidden((value) => !value)} />
      </header>
      <main className="h-full pt-14">
        <Outlet />
      </main>
    </>
  );
}