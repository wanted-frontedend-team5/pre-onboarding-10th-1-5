import { useCallback } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import todoApi from '../../api/todo';

export default function RemoveButton({ todoId, getTodos }) {
  const handleDelete = useCallback(
    async todoId => {
      await todoApi.deleteTodo(todoId);
      getTodos();
    },
    [getTodos],
  );

  return (
    <button
      onClick={() => handleDelete(todoId)}
      data-testid="delete-button"
      type="button"
    >
      <BsFillTrash3Fill />
    </button>
  );
}
