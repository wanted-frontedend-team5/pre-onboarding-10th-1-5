import { useState } from 'react';
import todoApi from '../../api/todo';
import DefaultButton from '../buttons/DefaultButton';
import Input from '../inputs/Input';

function AddTodoForm({ refreshHandler }) {
  const [myTodo, setMyTodo] = useState();

  const onChangeHandler = e => {
    setMyTodo(e.currentTarget.value);
  };

  const todoSubmitHandler = async e => {
    e.preventDefault();

    if (myTodo.trim().length === 0) return;

    await todoApi.createTodo({ todo: myTodo });

    setMyTodo('');
    await refreshHandler();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <Input
        type="text"
        label="할 일 작성"
        dataTestid="new-todo-input"
        id="myTodo"
        value={myTodo}
        onChange={onChangeHandler}
      />
      <DefaultButton
        onClick={todoSubmitHandler}
        data-testid="new-todo-add-button"
      >
        추가
      </DefaultButton>
    </form>
  );
}

export default AddTodoForm;
