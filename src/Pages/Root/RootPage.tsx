import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAuth } from '../../hooks/useAuth';
import { BarsButton } from './BarsButton';
import { logInPath, rootPath, signUpPath } from '../../routes';

export function RootPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);

  async function handleLogout() {
    try {
      await auth.logout();
      navigate(rootPath);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <nav className="fixed flex w-full justify-between bg-yellow-400 p-4">
        <Link className="font-semibold" to={rootPath}>
          React Todo List Demo
        </Link>
        <div
          onClick={() => setHidden(true)}
          className={classNames(
            { hidden: hidden },
            'absolute left-0 top-14 flex w-full flex-col gap-1 bg-yellow-500 p-2',
            'md:static md:top-auto md:flex md:w-auto md:flex-row md:gap-2 md:bg-yellow-400 md:p-0'
          )}>
          {auth.authenticated ? (
            <button
              className={classNames(
                'btn block rounded-lg bg-lime-600 px-4 py-2 text-center font-semibold text-white',
                'md:inline md:py-0'
              )}
              onClick={() => handleLogout()}>
              Log out
            </button>
          ) : (
            <>
              <Link
                to={logInPath}
                className={classNames(
                  'btn block rounded-lg bg-lime-600 px-4 py-2 text-center font-semibold text-white',
                  'md:inline md:py-0'
                )}>
                Log in
              </Link>
              <Link
                to={signUpPath}
                className={classNames(
                  'btn block rounded-lg bg-lime-600 px-4 py-2 text-center font-semibold text-white',
                  'md:inline md:py-0'
                )}>
                Sign up
              </Link>
            </>
          )}
        </div>
        <BarsButton onClick={() => setHidden((value) => !value)} />
      </nav>
      <main className="h-full pt-14">
        <Outlet />
      </main>
    </>
  );
}
