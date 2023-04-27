import React, { useCallback, useState } from 'react';
import todoApi from '../../api/todo';
import RemoveButton from './RemoveButton';

export default function TodoItem({ todoData, getTodos }) {
  const { todo, id, isCompleted } = todoData;
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleOnChange = useCallback(async () => {
    setIsChecked(prev => !prev);
    await todoApi.updateTodo(id, todo, !isChecked);
  }, [id, todo, isChecked]);

  return (
    <li className="flex flex-row">
      <label htmlFor="checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
        <span>{todo}</span>
      </label>
      <div>
        <RemoveButton todoId={id} getTodos={getTodos} />
      </div>
    </li>
  );
}
