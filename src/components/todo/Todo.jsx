import { useState } from 'react';
import todoApi from '../../api/todo';
import ModifyTodoForm from './ModifyTodoForm';
import DefaultButton from '../buttons/DefaultButton';

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
        <>
          <p>
            <input
              type="checkbox"
              onChange={updateCheckedHandler}
              checked={todo.isCompleted}
            />
            {todo.todo}
          </p>
          <DefaultButton
            data-testid="modify-button"
            onClick={modifyFormHandler}
          >
            수정
          </DefaultButton>
          <DefaultButton
            data-testid="delete-button"
            onClick={deleteTodoHandler}
          >
            삭제
          </DefaultButton>
        </>
      )}
    </li>
  );
}

export default Todo;
