import { useState } from 'react';
import todoApi from '../../api/todo';
import ModifyTodoForm from './ModifyTodoForm';

function Todo({ todo, refreshHandler }) {
  const [modifyMode, setModifyMode] = useState(false);

  const modifyFormHandler = () => {
    setModifyMode(!modifyMode);
  };

  const deleteTodoHandler = async () => {
    const deleteRes = await todoApi.deleteTodo(todo.id);
    if (deleteRes?.ok) alert('성공적으로 삭제됐습니다.');
    refreshHandler();
  };

  const updateCheckedHandler = async () => {
    const body = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    await todoApi.updateTodo(body);
    refreshHandler();
  };

  return (
    <li>
      {modifyMode && (
        <ModifyTodoForm
          todo={todo}
          refreshHandler={refreshHandler}
          closeHandler={modifyFormHandler}
        />
      )}
      {!modifyMode && (
        <label>
          <input
            type="checkbox"
            onChange={updateCheckedHandler}
            checked={todo.isCompleted}
          />
          <span>{todo.todo}</span>

          <button
            type="button"
            data-testid="modify-button"
            onClick={modifyFormHandler}
          >
            수정
          </button>

          <button
            type="button"
            data-testid="delete-button"
            onClick={deleteTodoHandler}
          >
            삭제
          </button>
        </label>
      )}
    </li>
  );
}

export default Todo;
