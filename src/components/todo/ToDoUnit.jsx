import { useState } from 'react';
import toDoApi from '../../api/toDo';
import Button from '../Button';
import Input from '../Input';

export default function ToDoUnit({ todo, deleteToDo, setCheck, getToDos }) {
  const [editMode, setEditMode] = useState(false);
  const [newToDo, setNewToDo] = useState(todo.todo);

  const editToDo = async () => {
    toDoApi.updateTodo(todo.id, newToDo, todo.isCompleted);
    getToDos();
    setEditMode(false);
  };

  // 취소 버튼 이벤트 핸들러
  const cancelEdit = () => {
    setEditMode(false);
    setNewToDo(todo.todo);
  };

  return (
    <li key={todo.id}>
      {!editMode ? (
        <label htmlFor="toDoCheck">
          <Input
            id="toDoCheck"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => setCheck(todo)}
          />
          <span>{todo.todo}</span>
          <Button
            data-testid="modify-button"
            type="button"
            onClick={() => setEditMode(true)}
          >
            수정
          </Button>
          <Button
            data-testid="delete-button"
            type="button"
            onClick={() => deleteToDo(todo)}
          >
            삭제
          </Button>
        </label>
      ) : (
        <form key={todo.id} onSubmit={editToDo} id="editForm">
          <Input
            data-testid="modify-input"
            value={newToDo}
            form="editForm"
            onChange={e => setNewToDo(e.target.value)}
          />
          <Button data-testid="submit-button" type="submit">
            제출
          </Button>
          <Button
            data-testid="cancel-button"
            type="button"
            onClick={cancelEdit}
          >
            취소
          </Button>
        </form>
      )}
    </li>
  );
}
