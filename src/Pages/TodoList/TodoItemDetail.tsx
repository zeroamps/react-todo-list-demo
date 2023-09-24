import { TodoItem } from '../../domains';

type Props = {
  todoItem: TodoItem;
};

export function TodoItemDetail({ todoItem }: Props) {
  return (
    <div className="rounded border border-yellow-500 bg-yellow-200 p-2">
      <div className="font-semibold">{todoItem.title}</div>
      <div className="text-sm">{todoItem.description}</div>
    </div>
  );
}
