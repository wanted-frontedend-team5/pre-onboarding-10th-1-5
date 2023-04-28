import { useState } from 'react';
import todoApi from '../../api/todo';
import Input from '../inputs/Input';
import SubmitButton from '../buttons/SubmitButton';

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
    refreshHandler();
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
      <SubmitButton data-testid="new-todo-add-button">추가</SubmitButton>
    </form>
  );
}

export default AddTodoForm;
