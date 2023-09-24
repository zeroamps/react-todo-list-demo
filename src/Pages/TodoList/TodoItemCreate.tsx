import { PlusButton } from './PlusButton';

type Props = {
  empty: boolean;
};

export function TodoItemCreate({ empty }: Props) {
  return (
    <>
      {empty ? (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <h1 className="text-center text-2xl font-light md:text-3xl">There is no task in your todo list</h1>
          <button className="btn-lg">Let's create</button>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded border bg-gray-100 px-2 py-1">
          <h1 className="text-center text-lg font-light">Let's create new tasks</h1>
          <PlusButton onClick={() => console.log('click')} />
        </div>
      )}
    </>
  );
}
