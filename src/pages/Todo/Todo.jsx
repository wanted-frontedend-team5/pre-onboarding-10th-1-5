import { useState, useEffect } from 'react';
import toDoApi from '../../api/toDo';
import ToDoUnit from '../../components/todo/ToDoUnit';

function Todo() {
  const token = localStorage.getItem('token');
  // 상태 선언
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  // 서버에서 todo data를 받아와 toDos에 갱신
  const getToDos = async () => {
    const response = toDoApi.getTodos();
    setToDos(response.data);
  };
  // 새로 입력받은 todo를 서버에 post, 화면의 toDos 갱신
  const addToDo = async () => {
    const createNewToDo = {
      todo: inputValue,
      isCompleted: false,
    };
    toDoApi.createTodo(createNewToDo);
    getToDos();
  };
  // todo 삭제
  const deleteToDo = async todo => {
    toDoApi.deleteTodo(todo.id);
    getToDos();
  };

  // 체크박스 변경
  const setCheck = async todo => {
    toDoApi.updateTodo(todo.id, todo.todo, !todo.isCompleted);
    getToDos();
  };

  // Side Effect
  useEffect(() => {
    if (token) getToDos();
  }, [token]);

  return (
    <>
      <form onSubmit={addToDo}>
        <input
          data-testid="new-todo-input"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button data-testid="new-todo-add-button" type="submit">
          추가
        </button>
      </form>
      <ul>
        {toDos.map(todo => (
          <ToDoUnit
            key={todo.id}
            todo={todo}
            deleteToDo={deleteToDo}
            setCheck={setCheck}
            getTodos={getToDos}
          />
        ))}
      </ul>
    </>
  );
}

export default Todo;
