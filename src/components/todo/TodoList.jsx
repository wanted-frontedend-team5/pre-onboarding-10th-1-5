import Todo from './Todo';

function TodoList({ todoList, fetchTodoRequest }) {
  return (
    <ul>
      {todoList.length === 0 && <h1>리스트가 존재하지 않습니다.</h1>}
      {todoList.length > 0 &&
        todoList.map(todo => {
          return (
            <Todo key={todo.id} refreshHandler={fetchTodoRequest} todo={todo} />
          );
        })}
    </ul>
  );
}

export default TodoList;
