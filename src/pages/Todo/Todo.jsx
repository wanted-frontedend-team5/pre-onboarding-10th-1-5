import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ToDoUnit from '../../components/todo/todounit';
import { axiosAuthInstance } from './axiosInstance';

function Todo() {
  const token = localStorage.getItem('token');
  // 상태 선언
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState([]);

  // 서버에서 todo data를 받아와 toDos에 갱신
  const getToDos = async () => {
    const response = await axiosAuthInstance.get('./todos');
    setToDos(response.data);
    // console.log(response);
  };
  // 새로 입력받은 todo를 서버에 post, 화면의 toDos 갱신
  const addToDo = async () => {
    const createNewToDo = {
      todo: inputValue,
      isCompleted: false,
    };
    await axiosAuthInstance.post('./todos', createNewToDo);
    getToDos();
    // console.log(response);
  };

  // todo 삭제
  const deleteToDo = async todo => {
    await axiosAuthInstance.delete(`./todos/${todo.id}`);
    // console.log(response);
    getToDos();
  };

  // 체크박스 변경
  const setCheck = async todo => {
    await axiosAuthInstance.put(`./todos/${todo.id}`, {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    });
    getToDos();
  };

  // Side Effect
  useEffect(() => {
    if (token) getToDos();
  }, [token]);

  return (
    <>
      <form onSubmit={addToDo}>
        <Input
          data-testid="new-todo-input"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Button data-testid="new-todo-add-button" type="submit">
          추가
        </Button>
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
