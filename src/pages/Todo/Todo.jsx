import { useState } from 'react';
import globalStyle from '../../utils/globalStyle';
import { postTodo } from '../../Api/todo';
import List from './List';

function Todo() {
  const [todoValue, setTodoVlaue] = useState('');

  const onClickHandler = async () => {
    postTodo({ todo: todoValue });
  };
  return (
    <div>
      <input
        data-testid="new-todo-input"
        value={todoValue}
        onChange={e => setTodoVlaue(e.target.value)}
        className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
      <button
        type="button"
        data-testid="new-todo-add-button"
        onClick={onClickHandler}
        className={globalStyle.buttonStyle}
      >
        추가
      </button>
      <List todo={todoValue} />
    </div>
  );
}

export default Todo;
