export function TodoListPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-center text-2xl font-light md:text-3xl">There is no task in your todo list</h1>
      <button className="btn-lg">Let's create</button>
    </div>
  );
}
