import TodoItem from './TodoItem';

export default function TodoList({ todos, isLoading, getTodos }) {
  if (isLoading) <p>Loading...</p>;
  return (
    <ul>
      {todos.length !== 0 ? (
        todos.map(todo => (
          <TodoItem key={todo.id} todoData={todo} getTodos={getTodos} />
        ))
      ) : (
        <p>Todo를 작성해보세요!</p>
      )}
    </ul>
  );
}
