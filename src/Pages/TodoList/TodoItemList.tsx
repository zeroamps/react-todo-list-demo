import { TodoItemDetail } from './TodoItemDetail';
import { TodoItem } from '../../domains';

type Props = {
  todoItems: TodoItem[];
};

export function TodoItemList({ todoItems }: Props) {
  const todoItemDetails = todoItems.map((todoItem) => <TodoItemDetail key={todoItem.id} todoItem={todoItem} />);

  return (
    <>
      {todoItems.length > 0 ? (
        <div className="flex flex-col gap-2 px-2 pb-16 pt-2">{todoItemDetails}</div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="text-center text-2xl font-light md:text-3xl">There is no task in your todo list</div>
        </div>
      )}
    </>
  );
}
