import { useState, useEffect } from 'react';
import { createTodo, getTodos } from '../../components/api';
import TodoItem from './TodoItem';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response);
    } catch (error) {
      console.log('fail fetch', error);
    }
  };

  // 함수의 재생성 막기 => 불필요한 메모리 낭비 감소
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodo = async () => {
    // newTodo에 내용이 없으면 아무것도 return하지 않도록
    if (!newTodo) return;

    try {
      await createTodo(newTodo);
      fetchTodos();

      // 입력 값 초기화
      setNewTodo('');
    } catch (error) {
      console.log('Todo를 추가하지 못했어요 😢', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="오늘 해야할 일을 입력해주세요!"
          onChange={e => setNewTodo(e.target.value)}
          data-testid="new-todo-input"
        />
        <button
          type="submit"
          data-testid="new-todo-add-button"
          onClick={handleTodo}
        >
          추가
        </button>
        <ul style={{ padding: '0' }}>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
