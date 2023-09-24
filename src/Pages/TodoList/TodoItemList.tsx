import { TodoItemDetail } from './TodoItemDetail';
import { TodoItemCreate } from './TodoItemCreate';
import { TodoItem } from '../../domains';

type Props = {
  todoItems: TodoItem[];
};

export function TodoItemList({ todoItems }: Props) {
  const todoItemDetails = todoItems.map((todoItem) => <TodoItemDetail key={todoItem.id} todoItem={todoItem} />);

  return (
    <div className="flex flex-col gap-2 p-2">
      <TodoItemCreate empty={false} />
      {todoItemDetails}
      <TodoItemCreate empty={false} />
    </div>
  );
}
