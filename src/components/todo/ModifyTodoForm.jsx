import { useState } from 'react';
import todoApi from '../../api/todo';
import DefaultButton from '../DefaultButton';
import Input from '../Input';
import SubmitButton from '../SubmitButton';

function ModifyTodoForm({ todo, refreshHandler, closeHandler }) {
  const [modifyTodo, setMyTodo] = useState();

  const onChangeHandler = e => {
    setMyTodo(e.currentTarget.value);
  };

  const todoSubmitHandler = async e => {
    e.preventDefault();

    if (modifyTodo.trim().length === 0) return;
    const info = {
      id: todo.id,
      todo: modifyTodo,
      isCompleted: todo.isCompleted,
    };

    await todoApi.updateTodo(info);

    refreshHandler();
    closeHandler();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <Input
        type="text"
        label="수정할 Todo 작성"
        dataTestid="modify-input"
        id="myTodo"
        value={modifyTodo}
        onChange={onChangeHandler}
      />
      <SubmitButton data-testid="submit-button">추가</SubmitButton>
      <DefaultButton
        type="button"
        data-testid="cancel-button"
        onClick={closeHandler}
      >
        취소
      </DefaultButton>
    </form>
  );
}

export default ModifyTodoForm;
