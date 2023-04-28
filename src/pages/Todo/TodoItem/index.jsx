import React, { useState } from 'react';
import { deleteTodo, getTodos, updateTodo } from '../../../components/api';

function TodoItem({ todo, setTodos }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(todo.todo);

  const handleComplete = async (todoId, todo, isComplete) => {
    console.log('todoId, isComplete : ', todoId, isComplete);
    try {
      await updateTodo(todoId, todo, isComplete);
      const response = await getTodos();
      setTodos(response);
      console.log('todoId, isComplete : ', todoId, isComplete);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModify = () => {
    setIsEditMode(true);
  };

  const handleSubmit = async (todoId, modifiedTodo, isComplete) => {
    try {
      console.log(todoId, modifiedTodo, isComplete);
      await updateTodo(todoId, modifiedTodo, isComplete);
      setTodos(await getTodos());
      setIsEditMode(false); // 수정모드 비활성화
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async todoid => {
    try {
      console.log(todoid);
      await deleteTodo(todoid);
      setTodos(todos => todos.filter(todo => todo.id !== todoid));
      console.log('delete!');
      return null;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setModifiedTodo(todo.todo);
    setIsEditMode(false);
  };

  return (
    <div key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={e => handleComplete(todo.id, todo.todo, e.target.checked)}
      />
      {isEditMode ? (
        <>
          <div>
            {' '}
            <input
              type="text"
              value={modifiedTodo}
              data-testid="modify-input"
              onChange={e => setModifiedTodo(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              data-testid="submit-button"
              onClick={() => handleSubmit(todo.id, modifiedTodo, true)}
            >
              제출
            </button>
            <button
              type="button"
              data-testid="cancel-button"
              onClick={() => handleCancel()}
            >
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <div>{todo.todo}</div>
          <div>
            <button
              type="button"
              data-testid="modify-button"
              onClick={() => handleModify()}
            >
              수정
            </button>
            <button
              type="button"
              data-testid="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              삭제
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
