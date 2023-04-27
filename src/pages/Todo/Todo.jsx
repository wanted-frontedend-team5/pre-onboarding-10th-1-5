import { axiosAuthInstance } from 'api/axiosInstance';
import Button from 'components/Button';
import Input from 'components/Input';
import { useCallback, useEffect, useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [modify, setModify] = useState(null);
  const [modifyText, setModifyText] = useState('');

  const handleChangeText = e => setText(e.target.value);
  const handleChangeModifyText = e => setModifyText(e.target.value);

  const getTodos = useCallback(async () => {
    try {
      const response = await axiosAuthInstance.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleCreate = useCallback(async () => {
    try {
      await axiosAuthInstance.post('/todos', {
        todo: text,
      });
      getTodos();
    } catch (error) {
      console.error(error);
    }
  }, [getTodos, text]);

  const handleDelete = useCallback(
    async id => {
      try {
        await axiosAuthInstance.delete(`/todos/${id}`);
        getTodos();
      } catch (error) {
        console.error(error);
      }
    },
    [getTodos],
  );

  const handleCheked = useCallback(
    async (e, id, todo) => {
      try {
        await axiosAuthInstance.put(`/todos/${id}`, {
          todo,
          isCompleted: e.target.checked,
        });
        getTodos();
      } catch (error) {
        console.error(error);
      }
    },
    [getTodos],
  );

  const handleUpdate = useCallback(
    async (id, isCompleted) => {
      try {
        await axiosAuthInstance.put(`/todos/${id}`, {
          todo: modifyText,
          isCompleted,
        });
        setModify(null);
        getTodos();
      } catch (error) {
        console.error(error);
      }
    },
    [getTodos, modifyText],
  );

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="container mx-auto">
      <div className="flex">
        <Input dataTestid="new-todo-input" onChange={handleChangeText} />
        <Button
          dataTestid="new-todo-add-button"
          isSuccess
          onClick={handleCreate}
        >
          추가
        </Button>
      </div>
      <div className="flex flex-col items-start mt-4">
        {todos.map(todo =>
          todo.id === modify ? (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  className="mr-4"
                  checked={todo.isCompleted}
                  onChange={e => handleCheked(e, todo.id, todo.todo)}
                />
              </label>
              <Input
                dataTestid="modify-input"
                onChange={handleChangeModifyText}
              />
              <Button
                dataTestid="submit-button"
                isSuccess
                onClick={() => handleUpdate(todo.id, todo.isCompleted)}
              >
                제출
              </Button>
              <Button
                dataTestid="cancel-button"
                isSuccess
                onClick={() => setModify(null)}
              >
                취소
              </Button>
            </li>
          ) : (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  className="mr-4"
                  checked={todo.isCompleted}
                  onChange={e => handleCheked(e, todo.id, todo.todo)}
                />
                <span className="mr-4">{todo.todo}</span>
              </label>
              <Button
                dataTestid="modify-button"
                isSuccess
                onClick={() => setModify(todo.id)}
              >
                수정
              </Button>
              <Button
                dataTestid="delete-button"
                isSuccess
                onClick={() => handleDelete(todo.id)}
              >
                삭제
              </Button>
            </li>
          ),
        )}
      </div>
    </div>
  );
}

export default Todo;
