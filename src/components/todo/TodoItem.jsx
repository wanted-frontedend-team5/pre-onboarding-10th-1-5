/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import todoApi from '../../api/todo';
import RemoveButton from './RemoveButton';
import ModifyButton from './ModifyButton';
import CancelButton from './CancelButton';
import SubmitButton from './SubmitButton';

export default function TodoItem({ todoData, getTodos }) {
  const { todo, id, isCompleted } = todoData;
  const [isModify, setIsModify] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleUpdate = async e => {
    e.preventDefault();
    const { value } = e.currentTarget.todoInput;
    await todoApi.updateTodo(id, value, isModify);
    getTodos();
    setIsModify(false);
  };

  const handleOnChange = useCallback(async () => {
    setIsChecked(prev => !prev);
    await todoApi.updateTodo(id, todo, !isChecked);
  }, [id, todo, isChecked]);

  return (
    <li className="flex flex-row">
      {isModify ? (
        <form onSubmit={handleUpdate}>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <input
              type="text"
              defaultValue={todo}
              name="todoInput"
              data-testid="modify-input"
            />
          </label>
          <SubmitButton />
          <CancelButton onclick={() => setIsModify(prev => !prev)} />
        </form>
      ) : (
        <>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <span>{todo}</span>
          </label>
          <div>
            <ModifyButton
              onclick={() => {
                setIsModify(prev => !prev);
              }}
            />
            <RemoveButton todoId={id} getTodos={getTodos} />
          </div>
        </>
      )}
    </li>
  );
}
