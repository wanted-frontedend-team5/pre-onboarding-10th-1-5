import { useState } from 'react';
import todoApi from 'api/todo';
import DefaultButton from 'components/button/DefaultButton';
import ModifyTodoForm from 'components/todo/ModifyTodoForm';

function Todo({ todo, refreshHandler }) {
  const [modifyMode, setModifyMode] = useState(false);

  const modifyFormHandler = () => {
    setModifyMode(!modifyMode);
  };

  const deleteTodoHandler = async () => {
    await todoApi.deleteTodo(todo.id);
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
    <li className="flex justify-between">
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
            />{' '}
            {todo.todo}
          </p>
          <div>
            <DefaultButton
              dataTestid="modify-button"
              onClick={modifyFormHandler}
            >
              수정
            </DefaultButton>
            <DefaultButton
              dataTestid="delete-button"
              onClick={deleteTodoHandler}
            >
              삭제
            </DefaultButton>
          </div>
        </>
      )}
    </li>
  );
}

export default Todo;
