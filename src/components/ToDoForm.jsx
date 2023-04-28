import { useState } from 'react';

import globalStyle from '../utils/globalStyle';
import todoApi from '../api/todo';

function ToDoForm({ toDos, setToDos }) {
  const [toDo, setToDo] = useState('');

  const pathData = {
    todo: '',
  };

  const handleChangeToDo = e => {
    const { value } = e.target;
    setToDo(value);
  };

  const handleClick = async e => {
    e.preventDefault();
    pathData.todo = toDo;
    const response = await todoApi.createTodo(pathData);
    setToDos([...toDos, response]);
    setToDo('');
  };

  return (
    <form className="w-full flex justify-between">
      <input
        data-testid="new-todo-input"
        value={toDo}
        onChange={handleChangeToDo}
        className={`${globalStyle.inputStyle} w-full mr-1`}
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        onClick={handleClick}
        className={`${globalStyle.buttonStyle} w-20`}
      >
        추가
      </button>
    </form>
  );
}

export default ToDoForm;
