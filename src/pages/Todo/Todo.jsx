import { useEffect, useState, useCallback } from 'react';
import todoApi from 'api/todo';
import TodoList from 'components/todo/TodoList';
import AddTodoForm from 'components/todo/AddTodoForm';
import DefaultButton from 'components/button/DefaultButton';
import { removeUserTokenInLocalStorage } from 'utils/localTokenUtils';
import { useNavigate } from 'react-router-dom';

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const navigate = useNavigate();

  const fetchTodoRequest = useCallback(async () => {
    const res = await todoApi.fetchList();
    setTodoList(res);
  }, []);

  const logOutHandler = () => {
    removeUserTokenInLocalStorage();
    navigate('/todo');
  };

  useEffect(() => {
    fetchTodoRequest();
  }, [fetchTodoRequest]);

  return (
    <div className=" w-full">
      <h1 className="text-2xl">투두리스트 페이지 입니다.</h1>
      <DefaultButton onClick={logOutHandler}>로그아웃하기</DefaultButton>
      <AddTodoForm refreshHandler={fetchTodoRequest} />
      <hr />
      <TodoList todoList={todoList} fetchTodoRequest={fetchTodoRequest} />
    </div>
  );
}

export default Todo;
