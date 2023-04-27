import { useState } from 'react';
import { toDoAPI } from '../pages/toDoList';

export default function TodoItem({ todo, deleteToDo, setCheck, getToDos }) {
  const [editMode, setEditMode] = useState(false);
  const [newToDo, setNewToDo] = useState(todo.todo);

  const editToDo = async () => {
    await toDoAPI.put(`./todos/${todo.id}`, {
      todo: newToDo,
      isCompleted: todo.isCompleted,
    });
    // console.log(response);
    getToDos();
    setEditMode(false);
  };

  // 취소 버튼 이벤트 핸들러
  const cancelEdit = () => {
    setEditMode(false);
    setNewToDo(todo.todo);
  };

  return (
    <>
      <li key={todo.id}>
        {!editMode ? (
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => setCheck(todo)}
            />
            <span>{todo.todo}</span>
            <button
              data-testid="modify-button"
              onClick={() => setEditMode(true)}
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={() => deleteToDo(todo)}
              type="button"
            >
              삭제
            </button>
          </label>
        ) : (
          <form key={todo.id} onSubmit={editToDo} id="editForm">
            <input
              data-testid="modify-input"
              value={newToDo}
              form="editForm"
              onChange={e => setNewToDo(e.target.value)}
            />
            <button data-testid="submit-button" type="submit">
              제출
            </button>
            <button
              data-testid="cancel-button"
              type="button"
              onClick={cancelEdit}
            >
              취소
            </button>
          </form>
        )}
      </li>
    </>
  );
}
