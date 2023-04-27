import { useEffect, useState, useCallback } from 'react';
import todoApi from '../../api/todo';
import TodoList from '../../components/todo/TodoList';
import AddTodoForm from '../../components/todo/AddTodoForm';

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodoRequest = useCallback(async () => {
    const res = await todoApi.fetchList();
    setTodoList(res);
  }, []);

  useEffect(() => {
    fetchTodoRequest();
  }, [fetchTodoRequest]);

  return (
    <div className=" w-full">
      <h1 className="text-3xl">투두리스트 페이지 입니다.</h1>
      <AddTodoForm refreshHandler={fetchTodoRequest} />
      <hr />
      <TodoList todoList={todoList} fetchTodoRequest={fetchTodoRequest} />
    </div>
  );
}

export default Todo;
